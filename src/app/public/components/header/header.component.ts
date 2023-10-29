import { HostListener, Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {
  

  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 60;
  }

  isMenuOpen = false;
  isSearchOpen = false;
  toggleMenu(): void {
    if(!this.isMenuOpen){
      document.body.className = "disapear-body"
    }
    else {
      document.body.className="";
    }
    if (this.isSearchOpen) {
      this.isSearchOpen = false;
    }
    
    this.isMenuOpen = !this.isMenuOpen;
    
    
  }
  toggleSearch(): void {
    if(!this.isSearchOpen){
      document.body.className = "disapear-body"
    }
    else {
      document.body.className="";
    }
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
    this.isSearchOpen = !this.isSearchOpen;
    

  }
  
}

