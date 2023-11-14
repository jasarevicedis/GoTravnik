import { Component, Input } from '@angular/core';
import { AccommodationData } from 'src/app/interfaces/AccommodationData';

@Component({
  selector: 'app-accommodation-card',
  templateUrl: './accommodation-card.component.html',
  styleUrls: ['./accommodation-card.component.scss']
})
export class AccommodationCardComponent {
  @Input() item: AccommodationData | undefined;
}
