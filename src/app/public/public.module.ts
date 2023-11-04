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
import { EventCardComponent } from './components/event-card/event-card.component';
import { WeatherPopupComponent } from './components/weather-popup/weather-popup.component';
import { AccommodationCardComponent } from './components/accommodation-card/accommodation-card.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { HomepageShortcutComponent } from './components/homepage-shortcut/homepage-shortcut.component';
import { FoodItempageComponent } from './itempages/food-itempage/food-itempage.component';
import { AttractionShortcutComponent } from './components/attraction-shortcut/attraction-shortcut.component';
import { RestaurantShortcutComponent } from './components/restaurant-shortcut/restaurant-shortcut.component';
import { AttractionDetailsComponent } from './pages/attraction-details/attraction-details.component';
//import { WeatherpageComponent } from './pages/weatherpage/weatherpage.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
    EventCardComponent,
    WeatherPopupComponent,
    AccommodationCardComponent,
    FoodCardComponent,
    HomepageShortcutComponent,
    FoodItempageComponent,
    AttractionShortcutComponent,
    RestaurantShortcutComponent,
    AttractionDetailsComponent,
    
    //WeatherpageComponent,
    
    
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule { }
