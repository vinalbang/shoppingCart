import { Component, OnInit } from '@angular/core';
import {Product} from '../productClass';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  prodInCart: Product[];
  

  constructor() {
      this.calcPrice();
   }

  ngOnInit() {
  }

  calcPrice():void{
    var price:number=0;
    for(var i=0;i<this.prodInCart.length;i++)
    {
        price+=this.prodInCart[i].price;
    }
    console.log(price);
  }
}
