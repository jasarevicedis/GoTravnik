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
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { ActivitiespageComponent } from './pages/activitiespage/activitiespage.component';
import { ActivityItempageComponent } from './itempages/activity-itempage/activity-itempage.component';
import { PlannerResultsComponent } from './pages/planner-results/planner-results.component';
import { RoutespageComponent } from './pages/routespage/routespage.component';
import { ReloadMapComponent } from './components/reload-map/reload-map.component';
import { AccommodationItempageComponent } from './itempages/accommodation-itempage/accommodation-itempage.component';


const routes: Routes = [
  {path:'', component: PublicComponent,
    children: [
      {path: '', component: HomepageComponent},
      {path: 'food', children: [
        {path: '', component: FoodpageComponent},
        {path: 'fooditem', component: FoodItempageComponent}
      ]},
      {path:'planthetrip', component: PlantrippageComponent},
      {path:'accomodation', children: [
        {path: '', component: AccomodationpageComponent},
        {path:'accommodationitem/:id', component: AccommodationItempageComponent}
      ]},
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
      {path:'blog', component: BlogpageComponent},
      {path: 'activities', children: [
        {path:'', component: ActivitiespageComponent},
        {path:'activityitem', component: ActivityItempageComponent}
      ]},
      {path:'results', component: PlannerResultsComponent},
      {path: 'routes', component: RoutespageComponent},
      {path: 'reload-route', component: ReloadMapComponent}
      
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
