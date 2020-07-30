import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './passenger-dashboard.component';
import { PassengerDetailsComponent } from './components/passenger-details.component';
import { PassengerCounterComponent } from './components/passenger-counter.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerViewerComponent } from './components/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [PassengerViewerComponent, PassengerDashboardComponent],
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailsComponent,
    PassengerCounterComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
