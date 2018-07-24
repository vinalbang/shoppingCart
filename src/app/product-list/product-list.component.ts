import { Component, OnInit } from '@angular/core';
import {NavigationEnd,ActivatedRoute,Route } from '@angular/router';
import {Product} from '../productClass';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  flag:number;

  cat:boolean[]=[false,false,false,false];

  products:Product[];

  constructor(private route:ActivatedRoute , private productService: ProductService) {
    this.flag=0;
    this.route.params.subscribe(
      res=>this.setFlag(res.id)
    )

   }

  setFlag(id:number):void{
    this.flag=id;
    console.log(this.flag);
    for(var i=0;i<this.cat.length;i++){
      this.cat[i]=false;
    }
    this.cat[this.flag-1]=true;
    if(this.cat[0]==true){
         this.products=this.productService.getProducts1();
    }
    else if(this.cat[1]==true){
         this.products=this.productService.getProducts2();
    }
    else if(this.cat[2]==true){
         this.products=this.productService.getProducts3();
    }
    else{
        this.products=this.productService.getProducts4();
    }
  }

  addToCart(ele:any):void{
      console.log(ele.parentElement.id);
  }

  ngOnInit() {
    
  }

}
