import { Injectable } from '@angular/core';
import{Product} from './productClass';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  prodInCart : Product[]=[];

  pushProduct(prod:Product):void{

    if(localStorage.getItem('cartEmpty')!='0'){
      this.prodInCart=JSON.parse(localStorage.getItem('cart'));
    }
    this.prodInCart.push(prod);
    localStorage.setItem('cart',JSON.stringify(this.prodInCart));
    localStorage.setItem('cartEmpty','1');
  }

  getProdInCart():Product[]{
    this.prodInCart=JSON.parse(localStorage.getItem('cart'));
    return this.prodInCart;
  }

  constructor() { } 
}
