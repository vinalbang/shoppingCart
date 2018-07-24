import { Injectable } from '@angular/core';
import{Product} from './productClass';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  prodInCart : Product[];

  pushProduct(prod:Product):void{
    this.prodInCart.push(prod);
  }

  getProdInCart():Product[]{
    return this.prodInCart;
  }

  constructor() { }
}
