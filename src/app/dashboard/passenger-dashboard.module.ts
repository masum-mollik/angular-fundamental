import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './passenger-dashboard.component';
import { PassengerDetailsComponent } from './components/passenger-details.component';
import { PassengerCounterComponent } from './components/passenger-counter.component';

@NgModule({
  imports: [CommonModule],
  exports: [PassengerDashboardComponent],
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailsComponent,
    PassengerCounterComponent,
  ],
})
export class PassengerDashboardModule {}
