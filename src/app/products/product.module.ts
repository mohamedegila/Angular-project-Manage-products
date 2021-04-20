import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { starComponent } from '../shared/star/star.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    starComponent,
    ConvertToSpacesPipe

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
