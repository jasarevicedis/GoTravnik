import { HostListener, Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {
  constructor(private apiService: ApiService) {}

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

  searchTerm: string | undefined;
  accommResults: any;
  hasData = false;

  search() {
    if(this.searchTerm) {
      this.apiService.getAccommodationByName(this.searchTerm).subscribe((result) => {
        this.accommResults = result;
        this.hasData = true;
      })
    }
    else {
      this.hasData=false;
    }
  }
  
}

