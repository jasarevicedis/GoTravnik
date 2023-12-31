import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { AdminComponent } from './admin.component';
import { AdminEventpageComponent } from './pages/admin-eventpage/admin-eventpage.component';
import { AdminDatapageComponent } from './pages/admin-datapage/admin-datapage.component';
import { AdminReviewpageComponent } from './pages/admin-reviewpage/admin-reviewpage.component';
import { AdminFoodPageComponent } from './pages/subpages/admin-food-page/admin-food-page.component';
import { AdminAccommodationPageComponent } from './pages/subpages/admin-accommodation-page/admin-accommodation-page.component';
import { AdminActivitiesPageComponent } from './pages/subpages/admin-activities-page/admin-activities-page.component';
import { AdminAttractionsPageComponent } from './pages/subpages/admin-attractions-page/admin-attractions-page.component';
import { AdminLoginpageComponent } from './pages/admin-loginpage/admin-loginpage.component';

const adminRoutes: Routes = [
  {path:'', component: AdminComponent,
    children: [
      {path:'',component: AdminHomepageComponent },
      {path:'eventcalendar', component: AdminEventpageComponent},
      {path:'data', component: AdminDatapageComponent},
      {path:'data/food', component: AdminFoodPageComponent},
      {path:'data/accommodation', component: AdminAccommodationPageComponent},
      {path:'data/activities', component:AdminActivitiesPageComponent},
      {path:'data/attractions', component: AdminAttractionsPageComponent},
      {path:'reviews', component:AdminReviewpageComponent},
      {path:'login', component: AdminLoginpageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
