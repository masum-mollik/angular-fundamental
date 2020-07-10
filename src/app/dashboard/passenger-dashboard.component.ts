import { Component, OnInit } from '@angular/core';
import { Passenger } from './passenger.interface';

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

  ngOnInit(): void {
    console.log('====================================');
    console.log('onInit');
    console.log('====================================');
    this.passengers = [
      {
        id: 1,
        fullName: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null,
      },
      {
        id: 2,
        fullName: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [
          { name: 'Ted', age: 12 },
          { name: 'Chloe', age: 7 },
        ],
      },
      {
        id: 3,
        fullName: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null,
      },
      {
        id: 4,
        fullName: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }],
      },
      {
        id: 5,
        fullName: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null,
      },
    ];
  }
  handleRemove = (event: Passenger) => {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  };
  handleEdit = (event: Passenger) => {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  };
}
