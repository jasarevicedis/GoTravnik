import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    
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
