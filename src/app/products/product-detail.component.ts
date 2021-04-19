import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string = "Product Details";
  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
  }

}
