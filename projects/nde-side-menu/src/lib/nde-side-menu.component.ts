import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemComponent } from '../components/menuItem/menuItem.component';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500'
}

export interface menuItem {
  path: string,
  itemName: string,
  icon: string
}

@Component({
  selector: 'lib-nde-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuItemComponent
  ],
  templateUrl: './nde-side-menu.component.html',
})
export class NdeSideMenuComponent {

  // valores por defecto
  public menuItems = input<menuItem[]>([]);
  public titleName = input<string>('NDE'); 
  public subTitleName = input<string>('Corp'); 
  public titleColor = input<TitleColor>(TitleColor.green);
  public isAuthenticated = input<boolean>(false);

  onSignOut = output();
  onSignIn = output();

}
