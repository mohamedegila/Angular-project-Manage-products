import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products', component:ProductListComponent
  },
  {
    path: 'products/:id', 
    canActivate:[ProductDetailGuard],
    component: ProductDetailComponent
  },{ 
    path: 'welcome', component: WelcomeComponent 
  },{
    path: '' , redirectTo: 'welcome',pathMatch:'full'
  },{
    path: '**', redirectTo: 'welcome',pathMatch:'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
