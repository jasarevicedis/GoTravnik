import { Component, Input } from '@angular/core';
import { FoodAndDrinkData } from 'src/app/interfaces/FoodAndDrinkData';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  @Input() item: any | undefined;

}
