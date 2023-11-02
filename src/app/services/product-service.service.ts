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
        console.log(this.url + '/product/get');
        return this.http.get<Product[]>(this.url + '/product/get')
    }
}
