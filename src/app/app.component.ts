import {Component} from '@angular/core';

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
      <nav class="nav">
        <a
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }">
          home
        </a>
        <a
          routerLink="/oops"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }">
          404
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
}
