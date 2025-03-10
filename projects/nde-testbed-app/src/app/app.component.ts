import { Component, signal } from '@angular/core';
import { NdeSideMenuComponent, TitleColor } from 'nde-side-menu';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NdeSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nde-testbed-app';
  public titleName = signal<string>('NDE');
  public titleColor = TitleColor;
  public isAuthenticated = signal<boolean>(true);
}
