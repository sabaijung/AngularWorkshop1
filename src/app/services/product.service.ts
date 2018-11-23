import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseUrl: string = 'http://localhost/6.API/5.api_ranger/crud_product.php?';

  constructor(private http: HttpClient) { }

  getProduct(keyword) {
    return this.http.get<Product[]>(this.baseUrl + "cmd=select&con=select&keyword=" + keyword);
  }

  getProductById(id) {
    return this.http.get<Product>(this.baseUrl + "cmd=select&con=one&keyword=" + id);
  }

  createProduct(data) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.baseUrl + "cmd=insert";
      this.http.post(apiURL, data)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            resolve(data);
          }
        );
    });
    return promise;
  }

  /* deleteData(product_id) {
     return this.http.delete(this.baseUrl + "cmd=delete" + '/' + product_id);
   }*/

  deleteData(product_id: any) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.baseUrl + "cmd=delete";
      this.http.post(apiURL, product_id)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            resolve(product_id);
          }
        );
    });
    return promise;
  }

}
