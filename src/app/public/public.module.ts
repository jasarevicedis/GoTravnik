import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FoodpageComponent } from './pages/foodpage/foodpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlantrippageComponent } from './pages/plantrippage/plantrippage.component';
import { AccomodationpageComponent } from './pages/accomodationpage/accomodationpage.component';
import { AttractionspageComponent } from './pages/attractionspage/attractionspage.component';
import { AttractionCardComponent } from './components/attraction-card/attraction-card.component';
import { EventpageComponent } from './pages/eventpage/eventpage.component';
import { AreguidepageComponent } from './pages/areguidepage/areguidepage.component';



@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    HomepageComponent,
    FoodpageComponent,
    FooterComponent,
    PlantrippageComponent,
    AccomodationpageComponent,
    AttractionspageComponent,
    AttractionCardComponent,
    EventpageComponent,
    AreguidepageComponent,
    
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule { }
