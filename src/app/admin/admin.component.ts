import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AdminLoginpageComponent } from './pages/admin-loginpage/admin-loginpage.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  showHeader: boolean = true;
  showSidebar: boolean = true;

  ngOnInit() {
  }

  showHideNavSidebar(event: any){
    this.showHeader= !(event instanceof AdminLoginpageComponent);   
    this.showSidebar= !(event instanceof AdminLoginpageComponent);                                        
  } 
}
