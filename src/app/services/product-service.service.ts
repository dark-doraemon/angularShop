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

    localAddToCart(data : Product)
    {
        let cartData = [];
        let localCart = localStorage.getItem('localCart');//lấy localCart trong localStorage
        //nếu chưa có thì tạo
        if(!localCart)
        {
            localStorage.setItem('localCart',JSON.stringify([data]));
        }
        //nếu có rồi 
        else
        {
            // thì thì lấy các sp trong localCart add vào cartData
            cartData = JSON.parse(localCart);
            //thêm sản phẩm với vòa cartData
            cartData.push(data);
            //update lại localStorage
            localStorage.setItem('localCart',JSON.stringify(cartData));
        }
    }
    removeItemFromLocal(productId : string)
    {
        let cartData = localStorage.getItem('localCart');//lấy localCart trong localStorage
        if(cartData)
        {
            let items : Product[] = JSON.parse(cartData);
            items = items.filter( (item) => item.productId !== productId)
            
            //sau khi filter xong thì set lại cho localStorage
            localStorage.setItem('localCart',JSON.stringify(items));
        }
    }

    updateProduct(product : Product)
    {
        return this.http.put<Product>(environment.baseApiUrl + '/Product/Update/' + product.productId   ,product);
    }

    removeProduct(product : Product)
    {
        return this.http.delete(environment.baseApiUrl + '/product/delete/' + product.productId);
    }

    addItem(product : Product)
    {
        console.log(product);
        return this.http.post<Product>(environment.baseApiUrl + '/Product/Post',product);
    }
}
