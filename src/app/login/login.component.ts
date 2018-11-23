import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILoginComponent } from './login.interface';
import { AlertService } from '../shared/services/alert.service';
import { AuthenService } from '../services/authen.service';
import { Router } from '@angular/router';
import { AppRouting } from '../app.routing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponent {

  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private alert: AlertService,
    private authen: AuthenService,
    private router: Router

  ) {
    this.initialCreateFormData();
  }

  // สร้างฟอร์ม
  private initialCreateFormData() {
    this.form = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [true]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.alert.someting_wrong();
    }
    console.log(JSON.stringify(this.form.value));
    this.authen
      .userAuthen(JSON.stringify(this.form.value))
      .then(res => {
        this.alert.notify('เข้าสู่ระบบสำเร็จ', 'info');
        this.router.navigate(['/', 'list-product']);
      })
      .catch(err => this.alert.notify(err.Message));
  }

  ngOnInit() {
  }

}
