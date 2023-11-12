import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';

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
import {MatPaginatorModule} from '@angular/material/paginator';
import { AccommodationFilterComponent } from './filters/accommodation-filter/accommodation-filter.component';
import { FoodFilterComponent } from './filters/food-filter/food-filter.component';
import { BlogShortcutComponent } from './components/blog-shortcut/blog-shortcut.component';
import { BigBlogShortcutComponent } from './components/big-blog-shortcut/big-blog-shortcut.component';
import { EventItempageComponent } from './itempages/event-itempage/event-itempage.component';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { ActivitiespageComponent } from './pages/activitiespage/activitiespage.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { ActivityItempageComponent } from './itempages/activity-itempage/activity-itempage.component';
import { Shortcut1PageComponent } from './itempages/shortcut1-page/shortcut1-page.component';
import { Shortcut2PageComponent } from './itempages/shortcut2-page/shortcut2-page.component';
import { Shortcut3PageComponent } from './itempages/shortcut3-page/shortcut3-page.component';
import { Shortcut4PageComponent } from './itempages/shortcut4-page/shortcut4-page.component';
import { NewsletterPopupComponent } from './components/newsletter-popup/newsletter-popup.component';
import { AreaNavComponent } from './pages/areguidepage/components/area-nav/area-nav.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import { SubmitEventComponent } from './forms/submit-event/submit-event.component';
import { SubmitPlaceComponent } from './forms/submit-place/submit-place.component';
import { GiveFeedbackComponent } from './forms/give-feedback/give-feedback.component';
import { ActivityShortcutComponent } from './components/activity-shortcut/activity-shortcut.component';
import { PlannerResultsComponent } from './pages/planner-results/planner-results.component';
import { HeaderSearchCardComponent } from './components/header-search-card/header-search-card.component';

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
    AccommodationFilterComponent,
    FoodFilterComponent,
    BlogShortcutComponent,
    BigBlogShortcutComponent,
    EventItempageComponent,
    BlogpageComponent,
    ActivitiespageComponent,
    ActivityCardComponent,
    ActivityItempageComponent,
    Shortcut1PageComponent,
    Shortcut2PageComponent,
    Shortcut3PageComponent,
    Shortcut4PageComponent,
    NewsletterPopupComponent,
    AreaNavComponent,
    SubmitEventComponent,
    SubmitPlaceComponent,
    GiveFeedbackComponent,
    ActivityShortcutComponent,
    PlannerResultsComponent,
    HeaderSearchCardComponent,
    
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
    MatCheckboxModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatChipsModule,
    MatDividerModule,
    HttpClientModule
    
  ],
  exports: [
    PublicComponent,
    HeaderComponent
  ]
})
export class PublicModule { }
