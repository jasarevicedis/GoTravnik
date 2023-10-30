import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
//import { AdminEventsPageComponent } from './pages/admin-events-page/admin-events-page.component';
import { AdminEventpageComponent } from './pages/admin-eventpage/admin-eventpage.component';
import { DataSectionCardComponent } from './components/data-section-card/data-section-card.component';
import { AdminDatapageComponent } from './pages/admin-datapage/admin-datapage.component';
import { AdminReviewpageComponent } from './pages/admin-reviewpage/admin-reviewpage.component';
import { AdminFoodPageComponent } from './pages/subpages/admin-food-page/admin-food-page.component';
import { AdminAttractionsPageComponent } from './pages/subpages/admin-attractions-page/admin-attractions-page.component';
import { AdminAccommodationPageComponent } from './pages/subpages/admin-accommodation-page/admin-accommodation-page.component';
import { AdminActivitiesPageComponent } from './pages/subpages/admin-activities-page/admin-activities-page.component';
import { AddeventPopupComponent } from './components/addevent-popup/addevent-popup.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminHomepageComponent,
    //AdminEventsPageComponent,
    AdminEventpageComponent,
    DataSectionCardComponent,
    AdminDatapageComponent,
    AdminReviewpageComponent,
    AdminFoodPageComponent,
    AdminAttractionsPageComponent,
    AdminAccommodationPageComponent,
    AdminActivitiesPageComponent,
    AddeventPopupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
