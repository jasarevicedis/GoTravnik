import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-shortcut',
  templateUrl: './restaurant-shortcut.component.html',
  styleUrls: ['./restaurant-shortcut.component.scss']
})
export class RestaurantShortcutComponent {
  @Input() item: any| undefined;

}
