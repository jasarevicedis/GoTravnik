import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {path:'', component: AdminComponent,
    children: [
      {path:'',component: AdminHomepageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
