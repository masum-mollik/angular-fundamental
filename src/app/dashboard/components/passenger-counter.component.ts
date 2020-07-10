import { Component, Input } from '@angular/core';
import { Passenger } from './../passenger.interface';

@Component({
  selector: 'app-passenger-counter',
  template: `
    <div>
      Total Passenger: {{ passengers?.length }} checked-in:
      {{ checkedInCounter() }}
    </div>
  `,
})
export class PassengerCounterComponent {
  @Input()
  passengers: Passenger[];
  checkedInCounter = () => {
    if (this.passengers) {
      return this.passengers.filter((passenger) => passenger.checkedIn)?.length;
    }
  };
}
