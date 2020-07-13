import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './passenger-dashboard.component';
import { PassengerDetailsComponent } from './components/passenger-details.component';
import { PassengerCounterComponent } from './components/passenger-counter.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [PassengerDashboardComponent],
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailsComponent,
    PassengerCounterComponent,
  ],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
