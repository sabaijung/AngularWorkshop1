//import { PageChangedEvent } from 'ngx-bootstrap';

export interface Product {
    product_id: string,
    cat_name: string,
    name: string,
    detail: string,
    product_cost: string,
    discount: string
}

export interface IProductComponent {
    searchText: string;
    /* startPage: number;
     limitPage: number;
     totalItems: number;
     onPageChanged(page: PageChangedEvent);*/
}

