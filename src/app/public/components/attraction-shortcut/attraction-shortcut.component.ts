import { Component, Input } from '@angular/core';
import { AttractionData } from 'src/app/interfaces/AttractionData';

@Component({
  selector: 'app-attraction-shortcut',
  templateUrl: './attraction-shortcut.component.html',
  styleUrls: ['./attraction-shortcut.component.scss']
})
export class AttractionShortcutComponent {
  @Input() item: AttractionData | undefined;

}
