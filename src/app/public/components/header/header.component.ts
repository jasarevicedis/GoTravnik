import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  isSearchOpen = false;
  toggleMenu(): void {
    if (this.isSearchOpen) {
      this.isSearchOpen = false;
    }
    this.isMenuOpen = !this.isMenuOpen;
    
  }
  toggleSearch(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
    this.isSearchOpen = !this.isSearchOpen;
  }
  
}

