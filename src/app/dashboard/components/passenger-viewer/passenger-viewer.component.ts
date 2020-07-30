import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service';
import {Passenger} from '../../passenger.interface';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
  hello = 30;

  constructor(private passengerService: PassengerDashboardService) {

  }


  ngOnInit(): void {
  }

}
