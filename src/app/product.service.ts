import {Injectable} from '@angular/core';
import{Product} from './productClass';
import { CartService } from './cart.service';

@Injectable({
   providedIn:"root"

})

export class ProductService{

    products1:Product[] = [
    {
      'id':0,
    'name':'TV',
    'price':25000,
    'color':'Black',
    'description':'size 25inch',
    'photoPath': '../assets/images/tv.jpg'
  },
   {
     'id':1,
      'name':'Mobile',
    'price':3500,
    'color':'White',
    'description':'size 5inch',
    'photoPath': '../assets/images/mobile.jpg'
  },
   {
     'id':2,
      'name':'Fridge',
    'price':15000,
    'color':'Silver',
    'description':'size 4Ft',
    'photoPath': '../assets/images/fridge.jpg'
  },
   {
     'id':3,
      'name':'Laptop',
    'price':40000,
    'color':'Black',
    'description':'size 20inch',
    'photoPath': '../assets/images/lapi.jpg'
    }
  ];
  products2:Product[] = [
    {
      'id':0,
    'name':'shoes',
    'price':2500,
    'color':'Blue',
    'description':'size 10',
    'photoPath': 'assets/images/shoes.jpg'
  },
   {
     'id':1,
      'name':'Sandal',
    'price':750,
    'color':'Pink',
    'description':'Size 8',
    'photoPath': 'assets/images/sandal.jpg'
  },
   {
     'id':2,
      'name':'Wedges',
    'price':1000,
    'color':'Brown',
    'description':'size 9',
    'photoPath': 'assets/images/Wedges.jpg'
  },
   {
     'id':3,
      'name':'Bellies',
    'price':1500,
    'color':'Blue',
    'description':'Size 11',
    'photoPath': 'assets/images/Bellies.jpg'
    }
  ];
  products3:Product[] = [
    {
      'id':0,
    'name':'Watch',
    'price':2000,
    'color':'Black',
    'description':'For male',
    'photoPath': 'assets/images/Watch.jpg'
  },
   {
     'id':1,
      'name':'Ear-rings',
    'price':300,
    'color':'Golden',
    'description':'Golden diamond',
    'photoPath': 'assets/images/Ear-rings.jpg'
  },
   {
     'id':2,
      'name':'bracelet',
    'price':1250,
    'color':'Pink',
    'description':'Pink stone',
    'photoPath': 'assets/images/bracelet.jpg'
  },
   {
     'id':3,
      'name':'Bangles',
    'price':450,
    'color':'Red',
    'description':'Size 8',
    'photoPath': 'assets/images/Bangles.jpg'
    }
  ];
  products4:Product[] = [
{
  'id':0,
    'name':'Shirt',
    'price':250,
    'color':'Black',
    'description':'size L',
    'photoPath': 'assets/images/shirt.jpg'
  },
   {
     'id':1,
      'name':'Saree',
    'price':500,
    'color':'Blue',
    'description':'Silk',
    'photoPath': 'assets/images/saree.jpg'
  },
   {
     'id':2,
      'name':'Kurta',
    'price':1000,
    'color':'Red',
    'description':'size M',
    'photoPath': 'assets/images/kurta.jpg'
  },
   {
     'id':3,
      'name':'Jacket',
    'price':2500,
    'color':'Red',
    'description':'Leather',
    'photoPath': 'assets/images/jacket.jpg'
    }
  ];

  constructor(private cart:CartService){
  }

  getProducts1(): Product[]{
      return this.products1;
  }
  getProducts2(): Product[]{
      return this.products2;
  }
  getProducts3(): Product[]{
      return this.products3;
  }
  getProducts4(): Product[]{
      return this.products4;
  }

  getProduct(cat: number, index:number){
    if(cat==1){
      this.cart.pushProduct(this.products1[index]);
    }
    else if(cat==2){
      this.cart.pushProduct(this.products2[index]);
    }
    else if(cat==3){
      this.cart.pushProduct(this.products3[index]);
    }
    else if(cat==4){
      this.cart.pushProduct(this.products4[index]);
    }
  }

}