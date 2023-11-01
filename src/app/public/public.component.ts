import { HostListener, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

  /*
  isHeaderChanging = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderChanging = window.scrollY > 60;
  }
*/
isHeaderChanging=true;
  
}
