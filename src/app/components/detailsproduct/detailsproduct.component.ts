import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { productService } from 'src/app/services/product-service.service';

@Component({
    selector: 'app-detailsproduct',
    templateUrl: './detailsproduct.component.html',
    styleUrls: ['./detailsproduct.component.scss']
})
export class DetailsproductComponent implements OnInit {
    constructor(private activeRoute: ActivatedRoute, private productService: productService) { }

    product: Product;

    ngOnInit(): void {
        // this.id = this.activeRoute.snapshot.params['productId'];
        const id = this.activeRoute.snapshot.paramMap.get('productId');
        this.productService.getProductByProductId(id).subscribe({
            next:(product : Product) =>{
                console.log(product);
                this.product = product
            }
        })
    }
}


