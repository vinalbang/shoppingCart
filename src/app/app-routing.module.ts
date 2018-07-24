import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CartComponent} from './cart/cart.component';
import {LoginComponent} from './login/login.component';
import {ProductGuard} from './product.guard';

const routes: Routes = [
  {
    path:'about',
    component: AboutComponent,
    canActivate: [
      ProductGuard
    ],
    runGuardsAndResolvers: 'always'
  },
  {
    path:'product-list/:id',
    component:ProductListComponent,
    canActivate: [
      ProductGuard
    ],
    runGuardsAndResolvers: 'always'
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate: [
      ProductGuard
    ],
    runGuardsAndResolvers: 'always'
  },
   {
    path:'',
    component:LoginComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
