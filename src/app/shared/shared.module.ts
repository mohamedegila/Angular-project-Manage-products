import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starComponent } from './star/star.component';



@NgModule({
  declarations: [
    starComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    starComponent,
    FormsModule
  ]
})
export class SharedModule { }
