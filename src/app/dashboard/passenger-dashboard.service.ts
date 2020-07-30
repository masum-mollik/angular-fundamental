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

  getPassenger(id: number): Observable<any> {
    const url = `http://localhost:3000/passengers/${id}`;
    return this.httpClient.get(url).pipe(map((passenger: Passenger) => passenger));
  }

  getPassengers(): Observable<any> {
    const url = 'http://localhost:3000/passengers/';
    return this.httpClient.get(url).pipe(map(passenger => passenger));
  }
}
