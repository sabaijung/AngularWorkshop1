import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';

const RouteLists: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'list-product',
        children: [
            { path: '', component: ListProductComponent },
            { path: ':id', component: ListProductComponent },
        ]
    },
    {
        path: 'create-product',
        children: [
            { path: '', component: CreateProductComponent },
            { path: ':id', component: CreateProductComponent },
        ]
    }

];

export const AppRouting = RouterModule.forRoot(RouteLists);