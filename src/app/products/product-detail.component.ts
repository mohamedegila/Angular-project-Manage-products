import { Iproduct } from './interface/product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from './service/product.service';


@Component({
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private _listFilter:number;
  sub?: Subscription ;
  pageTitle:string = "Product Details";
  imageWidth:   number  = 150;
  imageMargin:  number  = 2;
  product: Iproduct;
  products: Iproduct[] = [];
  errorMessage: string = '';
  constructor(
            private _route:ActivatedRoute,
            private _router:Router,
            private ProductService:ProductService
            ) { }
            // get listFilter():number{
            //   return this._listFilter;
            // }
            // set listFilter(value: number){
            //   this._listFilter = value;
            //   console.log("Insetter: " + value)
            //   this.product =  this.performFilter(value);
            // }

  ngOnInit():void{
    
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this.sub = this.ProductService.getProducts().subscribe({
        next : products => {

          this.products = products;
          this.product = this.performFilter(id)[0];
        },
        error: err => this.errorMessage = err
    })
  
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

  onBack():void{
    this._router.navigate(['/products']);
  }


  performFilter(filterBy):Iproduct[]{
    // filterBy = filterBy.toLocaleLowerCase();
    
    return this.products.filter(
      (product:Iproduct)=>product.productId == filterBy
    );
  }

}
