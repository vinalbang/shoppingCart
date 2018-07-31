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

   removeFromCart(k:number):Product[]{
    for(var i=0;i<this.prodInCart.length;i++)
    {
        if(i==k){
          break;
        }
    }
    for(i;i<this.prodInCart.length-1;i++){
      this.prodInCart[i]=this.prodInCart[i+1];
    }
    this.prodInCart.pop();
    localStorage.setItem('cart',JSON.stringify(this.prodInCart));
    return this.prodInCart;
  }

  constructor() { } 
}
