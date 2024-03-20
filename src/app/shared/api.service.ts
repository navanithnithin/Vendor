import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getProduct(): Observable<any> {
    return this.http.get('http://localhost:3000/cart');
  }
  addToCart(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/addToCart', data);
  }
  getCartProduct(): Observable<any> {
    return this.http.get('http://localhost:3000/addToCart');
  }
  deleteCartProduct(data: number) {
    return this.http.delete(`http://localhost:3000/addToCart/${data}`);
  }
  updateNoOfProducts(data: any) {
    return this.http.put(`http://localhost:3000/addToCart/${data.id}`, data);

  }
}
