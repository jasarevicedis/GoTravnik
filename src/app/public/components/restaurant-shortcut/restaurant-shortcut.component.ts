import { Component, Input } from '@angular/core';
import { FoodAndDrinkData } from 'src/app/interfaces/FoodAndDrinkData';

@Component({
  selector: 'app-restaurant-shortcut',
  templateUrl: './restaurant-shortcut.component.html',
  styleUrls: ['./restaurant-shortcut.component.scss']
})
export class RestaurantShortcutComponent {
  @Input() item: FoodAndDrinkData| undefined;

}
