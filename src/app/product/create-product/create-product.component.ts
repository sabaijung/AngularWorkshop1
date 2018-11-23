import { Component, OnInit } from '@angular/core';
import { CateprocService } from '../../services/cateproc.service';
import { AlertService } from '../../shared/services/alert.service';
import { ProductService } from '../../services/product.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {

  public itemCatProc = [];
  errorMsg: string;
  form: FormGroup;
  productID: any;
  itemProduct: any;
  // datax = [];
  constructor(private catProc: CateprocService,
    private builder: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private productSV: ProductService,
    private activatedRouter: ActivatedRoute) {
    this.initialCreateFormData();
    this.activatedRouter.params.forEach(
      params => {
        this.productID = params.id;
        console.log("prm:" + this.productID);
      });

    this.initialUpdateFormData();
  }

  ngOnInit() {
    this.fetchCatproc();
  }

  fetchCatproc() {
    this.catProc.getCatproc()
      .subscribe(data => this.itemCatProc = data,
        error => this.errorMsg = error);
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
      proc_id: '',
      proc_name: ['', [Validators.required]],
      cat_proc: ['', [Validators.required]],
      detail: '',
      unitperprice: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discount: ['', [Validators.required]],
    });
  }

  private initialUpdateFormData() {
    console.log("product_id:" + this.productID);
    if (!this.productID) return;
    this.productSV.getProductById(this.productID)
      .subscribe((data => {
        this.itemProduct = data
        /* this.datax = this.itemProduct.rs;
          console.log("data:" + this.itemProduct.rs);
          console.log("product_name:" + this.datax[1]);
          console.log("lenght:" + this.itemProduct.rs.length);
          console.log("data1:" + this.itemProduct.rs[0].product_cost);*/

        const form = this.form;
        form.controls['proc_id'].setValue(this.itemProduct.rs[0].product_id);
        form.controls['proc_name'].setValue(this.itemProduct.rs[0].name);
        form.controls['cat_proc'].setValue(this.itemProduct.rs[0].cat_id);
        form.controls['detail'].setValue(this.itemProduct.rs[0].detail);
        form.controls['unitperprice'].setValue(this.itemProduct.rs[0].product_cost);
        form.controls['price'].setValue(this.itemProduct.rs[0].product_price);

      }));

  }

  onSubmit() {
    if (this.form.invalid) {
      return this.alert.someting_wrong();
    }
    console.log(JSON.stringify(this.form.value));
    this.productSV
      .createProduct(JSON.stringify(this.form.value))
      .then(res => {
        this.alert.notify('บันทึกข้อมูลสำเร็จ', 'info');
        this.router.navigate(['/', 'list-product']);
      })
      .catch(err => this.alert.notify(err.Message));
  }

}
