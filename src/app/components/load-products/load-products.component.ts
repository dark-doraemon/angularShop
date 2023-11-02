import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { productService } from 'src/app/services/product-service.service';

@Component({
    selector: 'app-load-products',
    templateUrl: './load-products.component.html',
    styleUrls: ['./load-products.component.scss']
})

export class LoadProductsComponent implements OnInit {
    products : Product[] =[];
    service : productService
    constructor(service : productService) {
        this.service = service;
    }

    ngOnInit(): void {
        this.service.getAllProducts().subscribe({
            next: (products) =>{
                this.products = products
                console.log(products);

            },
            error:(reponse) =>{
                console.log(reponse);
            }
        })    
    }
}
