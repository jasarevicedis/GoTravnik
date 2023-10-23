import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';



@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    HomepageComponent,
    
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
