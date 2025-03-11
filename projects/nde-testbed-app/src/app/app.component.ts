import { Component, signal } from '@angular/core';
import { NdeSideMenuComponent, TitleColor, menuItem } from 'nde-side-menu';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NdeSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nde-testbed-app';


  public menuItems:menuItem[] = [
    { path: '/', itemName: 'Dashboard', icon: 'fa-house'},
    { path: '/proyects', itemName: 'Proyects', icon: 'fa-table'},
    { path: '/profile', itemName: 'Profile', icon: 'fa-user'},
    { path: '/notifications', itemName: 'Notifications', icon: 'fa-bell'}
  ];

  public titleColor = TitleColor;
  public isAuthenticated = signal<boolean>(true);
}
