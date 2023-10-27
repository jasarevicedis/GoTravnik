import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FoodpageComponent } from './pages/foodpage/foodpage.component';
import { PublicComponent } from './public.component';
import { PlantrippageComponent } from './pages/plantrippage/plantrippage.component';
import { AccomodationpageComponent } from './pages/accomodationpage/accomodationpage.component';
import { AttractionspageComponent } from './pages/attractionspage/attractionspage.component';
import { EventpageComponent } from './pages/eventpage/eventpage.component';
import { AreguidepageComponent } from './pages/areguidepage/areguidepage.component';


const routes: Routes = [
  {path:'', component: PublicComponent,
    children: [
      {path: '', component: HomepageComponent},
      {path: 'food', component: FoodpageComponent},
      {path:'planthetrip', component: PlantrippageComponent},
      {path:'accomodation', component: AccomodationpageComponent},
      {path:'attractions', component: AttractionspageComponent},
      {path:'events', component: EventpageComponent},
      {path:'areaguide', component:AreguidepageComponent},
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
