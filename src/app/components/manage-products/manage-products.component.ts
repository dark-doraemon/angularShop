import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { productService } from 'src/app/services/product-service.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Category } from 'src/app/models/category';
import { categoryService } from 'src/app/services/category.service';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-manage-products',
    templateUrl: './manage-products.component.html',
    styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
    
    products: Product[];
    categories : Category[];
    selectedProduct : Product;
    @ViewChild('productForm') form :NgForm;
    constructor(private proService: productService,private categoryService : categoryService) {}

    ngOnInit(): void {
        this.proService.getAllProducts().subscribe({
            next: (products: Product[]) => {
                this.products = products;
                console.log(this.products)
            }
        })
        this.categoryService.getAllCategories().subscribe({
            next :(categories : Category[]) =>{
                this.categories= categories;
                console.log(this.categories)
            }
        })
       
    }

    openDialog(modelTemplate : TemplateRef<any>){
    }

    removeItem(p : Product)
    {
        console.log(p);
    }

    btnUpdate(product : Product)
    {
        this.selectedProduct = product;
        let selectedProduct = this.products.find((p) => p.productId === product.productId);
        console.log(this.form);
        this.form.setValue({
            productId : selectedProduct.productId,
            productName : selectedProduct.productName,
            categoryName : selectedProduct.category.categoryName,
            productPrice : selectedProduct.productPrice,
            img : selectedProduct.img,
            productDescription : selectedProduct.productDescription
        });
    }
    
    btnConfirm(product : Product)
    {
        product.category = this.selectedProduct.category
        this.proService.updateProduct(product);
        console.log(product);
    }

    
}
