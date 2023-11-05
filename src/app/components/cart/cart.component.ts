import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/models/product';
import { productService } from 'src/app/services/product-service.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   
    productStringAndQuantity: Map<string, number> = new Map<string, number>();
    productAndQuantity :Map<Product,number> = new Map<Product,number>();
    totalPrice : number = 0;
    constructor(private productService : productService) { }
    ngOnInit(): void {
        this.loadItem();

        // console.log(this.productAndQuantity)
        
    }

    loadItem()
    {
        const localCart = localStorage.getItem('localCart');
        
        const cartData : Product[] = JSON.parse(localCart);

        let cartDataString : string[] = [];
        for(let product of cartData)
        {
            let productString : string = JSON.stringify(product);
            if(this.productStringAndQuantity.has(productString))
            {
                this.productStringAndQuantity.set(productString,this.productStringAndQuantity.get(productString) + 1);
                this.totalPrice += product.productPrice
            }
            else
            {
                this.productStringAndQuantity.set(productString,1);
                this.totalPrice = this.totalPrice + product.productPrice;
            }
        }

        this.productStringAndQuantity.forEach((value,key) =>{
            let product  = JSON.parse(key);
            this.productAndQuantity.set(product,value);
        })

    }

    removeItem(product : Product)
    {
        this.productService.removeItemFromLocal(product.productId);
        this.productStringAndQuantity = new Map<string, number>();
        this.productAndQuantity = new Map<Product,number>();
        this.totalPrice = 0 ;
        this.loadItem();
    }
}
