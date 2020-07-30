import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Passenger} from './passenger.interface';
import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';

interface Response {
  data: [];
}

@Injectable()
export class PassengerDashboardService {
  constructor(private httpClient: HttpClient) {
    console.log(this.httpClient);
  }

  getResponse(): Observable<any> {
    const url = 'http://dummy.restapiexample.com/api/v1/employees';

    return this.httpClient.get(url).pipe(
      map((response: Response) => {
        return response.data;
      }),
      catchError((err) => {
        return err;
      })
    );
  }

  updateEmployeeUrl(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const url = 'http://dummy.restapiexample.com/api/v1/update/675676';
    return this.httpClient.put(url, {}, httpOptions).pipe(
      map((response: Response) => {
        return response;
      }),
      catchError((err) => {
        return err;
      })
    );
  }

  getPassengers(): Passenger[] {

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
          {name: 'Ted', age: 12},
          {name: 'Chloe', age: 7},
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
        children: [{name: 'Jessica', age: 1}],
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
