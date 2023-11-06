import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-shortcut',
  templateUrl: './homepage-shortcut.component.html',
  styleUrls: ['./homepage-shortcut.component.scss']
})
export class HomepageShortcutComponent {
  @Input() text: string = "";
  
}
