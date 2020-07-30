import {Component, OnInit} from '@angular/core';
import {Passenger} from './passenger.interface';
import {PassengerDashboardService} from './passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
    <div>
      <app-passenger-counter [passengers]="passengers"></app-passenger-counter>
      <h3>Airline Passengers</h3>
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullName }}
      </div>
      <div *ngFor="let employee of employees">
        {{ employee?.employee_name }}
      </div>

      <app-passenger-details
        *ngFor="let passenger of passengers"
        [passenger]="passenger"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)"
      ></app-passenger-details>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  employees: [];

  constructor(private passengerService: PassengerDashboardService) {
  }

  ngOnInit(): void {
    console.log('====================================');
    console.log('onInit');
    console.log('====================================');
    this.passengerService.getPassengers().subscribe(response => this.passengers = response);
    this.passengerService.getResponse().subscribe((value) => {
      this.employees = value;
    });
  }

  handleRemove = (event: Passenger) => {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
    // tslint:disable-next-line: semicolon
  };
  handleEdit = (event: Passenger) => {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
    // tslint:disable-next-line: semicolon
  };
}
