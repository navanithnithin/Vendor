import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CartComponent } from './cart/cart.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent, CartComponent, SingleproductComponent, WishlistComponent, MainhomeComponent, ShopComponent, CheckoutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
