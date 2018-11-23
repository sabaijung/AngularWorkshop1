import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AlertService } from '../../shared/services/alert.service';
import { IProductComponent } from '../../models/product';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements IProductComponent, OnInit {

  itemProduct = [];
  errorMsg: string;
  searchText: string = '';

  constructor(private productSV: ProductService,
    private router: Router,
    private alert: AlertService) { }

  ngOnInit() {
    this.fetchProduct("all");
  }

  fetchProduct(search) {
    this.productSV.getProduct(search)
      .subscribe(data => this.itemProduct = data,
        error => this.errorMsg = error);
  }

  gotoCreateProductPage() {
    this.router.navigate(['/', 'create-product']);
  }

  onUpdateProduct(item) {
    this.router.navigate(['/', 'create-product', item]);
  }

  onDeleteData(item) {
    let data = {
      product_id: item
    };

    this.alert.confirm().then(status => {
      if (!status) return;
      this.productSV
        .deleteData(data)
        .then(() => {
          this.alert.notify('ลบข้อมูลสำเร็จ', 'info');
          this.fetchProduct("all");
        })
        .catch(err => this.alert.notify(err.Message));
    });
  }

  searchData() {
    console.log(this.searchText);
    this.fetchProduct(this.searchText);
  }

  /*onPageChange(url) {
    fetch(url)
        .then(res => res.json())
        .then(result => {
            this.setState({
                expense: result.rs,
                paging: result.paging
            });
            console.log(result.paging);
        },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
}*/

}
