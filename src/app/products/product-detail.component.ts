import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string = "Product Details";
  constructor() { }

  ngOnInit(): void {
  }

}
