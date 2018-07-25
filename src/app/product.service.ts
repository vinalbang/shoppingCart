import {Injectable} from '@angular/core';
import{Product} from './productClass';

@Injectable({
   providedIn:"root"

})

export class ProductService{

    products: Product[];
    prodInCart: Product[];

  constructor(){
  }

  getProducts1(): Product[]{

      this.products= JSON.parse(localStorage.getItem('products1'));
      return this.products;
  }
  getProducts2(): Product[]{
      this.products= JSON.parse(localStorage.getItem('products2'));
      return this.products;
  }
  getProducts3(): Product[]{
     this.products= JSON.parse(localStorage.getItem('products3'));
      return this.products;
  }
  getProducts4(): Product[]{
      this.products= JSON.parse(localStorage.getItem('products4'));
      return this.products;
  }


}