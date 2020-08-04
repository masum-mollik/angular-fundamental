import {Component} from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav class="nav">
        <a
          *ngFor="let navItem of nav"
          [routerLink]="navItem.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: navItem.exact }">
          {{navItem.name}}
        </a>

      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'home',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: true
    },
  ];
}
