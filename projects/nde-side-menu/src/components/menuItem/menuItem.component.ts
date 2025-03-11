import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'menu-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menuItem.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  public path = input.required<string>();
  public itemName = input.required<string>();
  public icon = input.required<string>();
}
