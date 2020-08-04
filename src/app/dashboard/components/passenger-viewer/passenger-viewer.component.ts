import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service';
import {Passenger} from '../../passenger.interface';
import {Router, ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private passengerService: PassengerDashboardService, private router: Router, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(
        data =>
          this.passengerService.getPassenger(data.id)
      )).subscribe(
      (passenger: Passenger) => {
        console.log('log', passenger);
        return this.passenger = passenger;
      }, (error) => {
        console.log('error', error); })
    ;
  }

}
