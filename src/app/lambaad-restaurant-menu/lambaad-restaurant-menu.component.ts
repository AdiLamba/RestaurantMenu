import { Component, Input } from '@angular/core';
import { menuItemsInterface, restaurantInfoInterface } from '../../myInterfaces/lambaadInterfaces';

@Component({
  selector: 'app-lambaad-restaurant-menu',
  templateUrl: './lambaad-restaurant-menu.component.html',
  styleUrl: './lambaad-restaurant-menu.component.css'
})
export class LambaadRestaurantMenuComponent {

  @Input() sharedRestaurantMenu991702428! : menuItemsInterface[];
  @Input() sharedResturantInfo991702428! : restaurantInfoInterface;
}
