import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderModule } from "angular-uploader";
import { AdminRoutingModule } from './admin-routing.module';

import {MatDatepickerModule} from '@angular/material/datepicker';

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
import { AdminEventCardComponent } from './components/admin-event-card/admin-event-card.component';
import { AdminLoginpageComponent } from './pages/admin-loginpage/admin-loginpage.component';
//import { AddattractionpopupComponent } from './components/addattractionpopup/addattractionpopup.component';
import { AddattractionPopupComponent } from './components/addattraction-popup/addattraction-popup.component';
import { AddfoodPopupComponent } from './components/addfood-popup/addfood-popup.component';
import { AddaccommodationPopupComponent } from './components/addaccommodation-popup/addaccommodation-popup.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { DetailedFoodPopupComponent } from './components/detailed-food-popup/detailed-food-popup.component';
import { DetailedAccommPopupComponent } from './components/detailed-accomm-popup/detailed-accomm-popup.component';
import { DetailedActivityPopupComponent } from './components/detailed-activity-popup/detailed-activity-popup.component';
import { DetailedAttractionPopupComponent } from './components/detailed-attraction-popup/detailed-attraction-popup.component';
import { AddactivityPopupComponent } from './components/addactivity-popup/addactivity-popup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DeleteAccommComponent } from './pages/subpages/popups/delete-accomm/delete-accomm.component';
import { DeleteActivityComponent } from './pages/subpages/popups/delete-activity/delete-activity.component';
import { DeleteAttractionComponent } from './pages/subpages/popups/delete-attraction/delete-attraction.component';
import { DeleteFoodComponent } from './pages/subpages/popups/delete-food/delete-food.component';
import { EditAccommComponent } from './pages/subpages/popups/edit-accomm/edit-accomm.component';
import { EditActivityComponent } from './pages/subpages/popups/edit-activity/edit-activity.component';
import { EditAttractionComponent } from './pages/subpages/popups/edit-attraction/edit-attraction.component';
import { EditFoodComponent } from './pages/subpages/popups/edit-food/edit-food.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailedReviewPopupComponent } from './components/detailed-review-popup/detailed-review-popup.component';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
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
    AddeventPopupComponent,
    AdminEventCardComponent,
    AdminLoginpageComponent,
    //AddattractionpopupComponent,
    AddattractionPopupComponent,
    AddfoodPopupComponent,
    AddaccommodationPopupComponent,
    DetailedFoodPopupComponent,
    DetailedAccommPopupComponent,
    DetailedActivityPopupComponent,
    DetailedAttractionPopupComponent,
    AddactivityPopupComponent,
    DeleteAccommComponent,
    DeleteActivityComponent,
    DeleteAttractionComponent,
    DeleteFoodComponent,
    EditAccommComponent,
    EditActivityComponent,
    EditAttractionComponent,
    EditFoodComponent,
    DetailedReviewPopupComponent,
    DeleteItemComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule,
    FormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    UploaderModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
