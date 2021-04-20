import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { starComponent } from '../shared/star/star.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
   
    ConvertToSpacesPipe

  ],
  imports: [
    RouterModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
