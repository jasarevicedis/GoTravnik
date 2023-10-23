import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FoodpageComponent } from './pages/foodpage/foodpage.component';



@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    HomepageComponent,
    FoodpageComponent,
    
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
