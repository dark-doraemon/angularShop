import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class productService {

    url: string = environment.baseApiUrl;
    private http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http
    }

    getAllProducts() {
        return this.http.get<Product[]>(this.url + '/product/get')
    }
    
    getAllProductsByCategoryId(categoryId : string)
    {
        return this.http.get<Product[]>(this.url + '/product/get/' + categoryId)
    }

    getProductByProductId(productId : string)
    {
        return this.http.get<Product>(this.url + '/product/getbyproductid/' + productId)
    }
}
