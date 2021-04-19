import { ProductService } from './service/product.service';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Iproduct } from './interface/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,OnDestroy{

  constructor(private ProductService:ProductService){}

  private _listFilter:string = '';
  pageTitle:   string  = "Product List";
 
  imageWidth:   number  = 50;
  imageMargin:  number  = 2;
  showImage:    boolean = false;
  errorMessage: string = '';
  products: Iproduct[] = [];
  sub?: Subscription ;
  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    console.log("Insetter: " + value)
    this.filteredProducts =  this.performFilter(value);
  }

  filteredProducts: Iproduct[] = [];

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  ngOnInit():void{
    
    this.sub = this.ProductService.getProducts().subscribe({
        next : products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
    })
  
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

  performFilter(filterBy):Iproduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    
    return this.products.filter(
      (product:Iproduct)=>product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  onRatingClicked(message: string):void{
      this.pageTitle  =  'Product List: ' + message;
  }

}
