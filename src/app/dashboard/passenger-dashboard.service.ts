import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from './passenger.interface';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { retry } from 'rxjs/operators';

interface Response {
  data: [];
}
@Injectable()
export class PassengerDashboardService {
  constructor(private httpClient: HttpClient) {
    console.log(this.httpClient);
  }

  url = 'http://dummy.restapiexample.com/api/v1/employees';
  getResponse(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map((response: Response) => {
        return response.data;
      }),
      catchError((err) => {
        return err;
      })
    );
  }

  getPassengers(): Passenger[] {
    this.getResponse().subscribe((value) => console.log('value', value));
    return [
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
}
