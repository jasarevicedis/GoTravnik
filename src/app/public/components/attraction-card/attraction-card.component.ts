import { Component, Input } from '@angular/core';
import { AttractionData } from 'src/app/interfaces/AttractionData';

@Component({
  selector: 'app-attraction-card',
  templateUrl: './attraction-card.component.html',
  styleUrls: ['./attraction-card.component.scss']
})
export class AttractionCardComponent {
  @Input() item: any | undefined;

}
