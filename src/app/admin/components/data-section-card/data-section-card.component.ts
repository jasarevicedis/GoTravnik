import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-section-card',
  templateUrl: './data-section-card.component.html',
  styleUrls: ['./data-section-card.component.scss']
})

export class DataSectionCardComponent {
  @Input() sectionName = "";
  @Input() sectionImageSource="";
}
