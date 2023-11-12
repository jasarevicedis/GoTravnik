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

  isList1Open=false;
  isList2Open=false;

  toggleList1(): void  {
    this.isList1Open = !this.isList1Open;
  }
  toggleList2(): void  {
    this.isList2Open = !this.isList2Open;
  }

  isLanguageListOpen = false;
  toggleLanguages(): void {
    this.isLanguageListOpen = !this.isLanguageListOpen;
  }
  
}

