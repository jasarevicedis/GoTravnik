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
import { AttractionDetailsComponent } from './pages/attraction-details/attraction-details.component';
import { FoodItempageComponent } from './itempages/food-itempage/food-itempage.component';
import { EventItempageComponent } from './itempages/event-itempage/event-itempage.component';


const routes: Routes = [
  {path:'', component: PublicComponent,
    children: [
      {path: '', component: HomepageComponent},
      {path: 'food', children: [
        {path: '', component: FoodpageComponent},
        {path: 'fooditem', component: FoodItempageComponent}
      ]},
      {path:'planthetrip', component: PlantrippageComponent},
      {path:'accomodation', component: AccomodationpageComponent},
      {path:'attractions', 
        children: [
          {path: '', component: AttractionspageComponent},
          {path:'starigrad', component: AttractionDetailsComponent}
        ]
      },
      {path:'events', children: [
        {path: '', component: EventpageComponent},
        {path:'eventitem', component: EventItempageComponent}
      ]},
      {path:'areaguide', component:AreguidepageComponent},
      
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
