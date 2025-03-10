import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500'
}

@Component({
  selector: 'lib-nde-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nde-side-menu.component.html',
  styles: ``
})
export class NdeSideMenuComponent {

  // valores por defecto
  public titleName = input<string>('NDE'); 
  public titleColor = input<TitleColor>(TitleColor.green);
  public isAuthenticated = input<boolean>(false);

  onSignOut = output();
  onSignIn = output();

}
