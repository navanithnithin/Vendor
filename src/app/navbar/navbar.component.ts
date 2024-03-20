import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productCount: any;
  totalNoOfProducts: number = 0;

  constructor(private api: ApiService) {
    this.totalCartProduct();
  }

  totalCartProduct() {
    this.api.getCartProduct().subscribe(res => {
      this.totalNoOfProducts = res.length;
      const a = JSON.stringify(this.totalNoOfProducts)
      sessionStorage.setItem("key", res.length);
    })
  }
  ngOnInit(): void {
    this.totalCartProduct();

  }

}

