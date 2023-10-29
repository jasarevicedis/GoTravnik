import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { AdminComponent } from './admin.component';
import { AdminEventpageComponent } from './pages/admin-eventpage/admin-eventpage.component';
import { AdminDatapageComponent } from './pages/admin-datapage/admin-datapage.component';
import { AdminReviewpageComponent } from './pages/admin-reviewpage/admin-reviewpage.component';
import { AdminFoodPageComponent } from './pages/subpages/admin-food-page/admin-food-page.component';

const adminRoutes: Routes = [
  {path:'', component: AdminComponent,
    children: [
      {path:'',component: AdminHomepageComponent },
      {path:'eventcalendar', component: AdminEventpageComponent},
      {path:'data', component: AdminDatapageComponent},
      {path:'data/food', component: AdminFoodPageComponent},
      {path:'reviews', component:AdminReviewpageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
