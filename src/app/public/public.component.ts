import { HostListener, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Router } from '@angular/router';
import { AreguidepageComponent } from './pages/areguidepage/areguidepage.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {
  showFooter: boolean = true;
  constructor(public router: Router) {}
  /*
  isHeaderChanging = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderChanging = window.scrollY > 60;
  }
*/
isHeaderChanging=true;
showHide(event: any){
  this.showFooter= !(event instanceof AreguidepageComponent);   
                                         
} 
}
