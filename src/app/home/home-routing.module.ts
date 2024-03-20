import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { ShopComponent } from './shop/shop.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent,
    children: [
      { path: "mainhome", component: MainhomeComponent },
      { path: "shop", component: ShopComponent },
      { path: "wishlist", component: WishlistComponent },
      { path: "cart", component: CartComponent },
      { path: "singleproduct", component: SingleproductComponent },
      { path: "checkout", component: CheckoutComponent },

      { path: "", redirectTo: "mainhome", pathMatch: "full" },

    ],
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
