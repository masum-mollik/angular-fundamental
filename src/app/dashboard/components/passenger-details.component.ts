import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Passenger } from './../passenger.interface';

@Component({
  selector: 'app-passenger-details',
  styleUrls: ['./passenger-details.component.scss'],
  template: `
    <div>
      <div>
        <div *ngIf="editing">
          <input
            type="text"
            [value]="passenger.fullName"
            (input)="onNameChange(name.value)"
            #name
          />
        </div>
        <button #editFullName (click)="onEditToggle()">
          {{ this.editing ? 'Done' : 'Edit' }}
        </button>
        <button *ngIf="!editing" #removePassenger (click)="onRemove()">
          Remove
        </button>
      </div>
      <span
        class="status"
        [class.checked-in]="passenger.checkedIn"
        [class.checked-out]="!passenger.checkedIn"
        [style.background-color]="passenger.checkedIn ? 'yellow' : 'pink'"
      ></span>
      {{ passenger.fullName }}
      <p>{{ passenger | json }}</p>
      <div class="date">
        <span
          class="check-in-date"
          [ngStyle]="{
            color: passenger.checkInDate ? 'green' : 'red'
          }"
        >
          Checked in date:
          {{
            passenger.checkInDate
              ? (passenger.checkInDate | date: 'yMMMMd' | uppercase)
              : ('Not checked in' | uppercase)
          }}, Number of children {{ passenger.children?.length || 0 }}
        </span>
      </div>
    </div>
  `,
})
export class PassengerDetailsComponent implements OnChanges {
  @Input()
  passenger: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing = false;

  onEditToggle = () => {
    if (this.editing) {
      this.edit.emit(this.passenger);
    }
    this.editing = !this.editing;
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.passenger) {
      this.passenger = Object.assign({}, changes.passenger.currentValue);
    }
  }
  onRemove = () => {
    this.remove.emit(this.passenger);
  };

  onEdit = () => {
    this.edit.emit(this.passenger);
  };

  onNameChange = (name: string) => {
    this.passenger.fullName = name;
  };
}
