import {Component, OnInit, Input} from '@angular/core';
import {Passenger} from '../../passenger.interface';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {
  @Input()
  passenger: Passenger;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleChange = (checkedIn: boolean) => {
    if (checkedIn) {
      this.passenger.checkInDate = Date.now();
    }
  }

}
