import { Component } from '@angular/core';

interface Child {
  name: string;
  age: number;
}
interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkInDate?: number;
  children: Child[];
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <app-passenger-dashboard></app-passenger-dashboard>
    </div>
  `,
})
export class AppComponent {}
