import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from 'src/app/models/product';
import { productService } from 'src/app/services/product-service.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
    selector: 'app-manage-products',
    templateUrl: './manage-products.component.html',
    styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
    
    products: Product[];
    constructor(private proService: productService,private dialogRef : MatDialog) {}

    ngOnInit(): void {
        this.proService.getAllProducts().subscribe({
            next: (products: Product[]) => {
                this.products = products;
                console.log(this.products)
            }
        })
    }

    openDialog(modelTemplate : TemplateRef<any>){
    }

}
