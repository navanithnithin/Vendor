import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  noOfProducts: number = 1;
  cartProducts: any;
  constructor(private api: ApiService) {
  }
  getCartProduct() {
    this.api.getCartProduct().subscribe(res => {
      this.cartProducts = res;
      //console.log(res);
    })

  }

  deleteTheProduct(data: any) {
    this.api.deleteCartProduct(data.id).subscribe(res => {
      alert("deleted")
      this.getCartProduct();
    })
    window.location.reload();
  }

  productNo(data: any, update: any) {

    if (data.noOfProducts < 10 && update == 'increase') {
      data.noOfProducts = data.noOfProducts + 1;
      console.log(data.noOfProducts)
      this.api.updateNoOfProducts(data).subscribe(res => {
        this.getCartProduct();
      })
    }

    else {
      if (data.noOfProducts > 1 && update == 'decrease') {
        data.noOfProducts = data.noOfProducts - 1;
        this.api.updateNoOfProducts(data).subscribe(res => {
          this.getCartProduct();
        })
      }


    }
  }


  ngOnInit(): void {
    this.getCartProduct();
  }

}
