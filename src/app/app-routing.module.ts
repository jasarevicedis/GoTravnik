import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'', loadChildren:()=> import('./public/public.module').then(x => x.PublicModule)},
  {path: 'admin', loadChildren:()=> import('./admin/admin.module').then(x => x.AdminModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
