import { Component, Input } from '@angular/core';
import { EventData } from 'src/app/interfaces/EventData';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() item: any | undefined;

}
