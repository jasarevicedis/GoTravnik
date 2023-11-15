import { Component, Input } from '@angular/core';
import { ActivityData } from 'src/app/interfaces/ActivityData';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent {
  @Input() item: any | undefined;

}
