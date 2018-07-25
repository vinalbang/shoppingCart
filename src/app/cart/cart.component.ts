import { Component, OnInit } from '@angular/core';
import {Product} from '../productClass';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  prodInCart: Product[];
  price : number=0;

  constructor(private cart:CartService) {
      this.loadData();
   }

  ngOnInit() {
  }

  loadData():void{
      this.prodInCart=this.cart.getProdInCart();
      this.calcPrice();
  }

  calcPrice():void{
    for(var i=0;i<this.prodInCart.length;i++)
    {
        this.price+=this.prodInCart[i].price;
    }
    console.log(this.price);
  }
}
