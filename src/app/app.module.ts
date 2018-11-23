import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AlertService } from './shared/services/alert.service';
import { AuthenService } from './services/authen.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ContentComponent } from './shared/components/content/content.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    CreateProductComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    AlertService,
    AuthenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
