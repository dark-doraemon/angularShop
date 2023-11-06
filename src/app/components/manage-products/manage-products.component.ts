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
    categories: Category[];
    selectedProduct: Product;
    isAdd : boolean = false;
    @ViewChild('productForm') form: NgForm;
    constructor(private proService: productService, private categoryService: categoryService) { }

    loadProduct() {
        this.proService.getAllProducts().subscribe({
            next: (products: Product[]) => {
                this.products = products;
                console.log(this.products)
            }
        })
    }

    ngOnInit(): void {
        this.loadProduct();
        this.categoryService.getAllCategories().subscribe({
            next: (categories: Category[]) => {
                this.categories = categories;
                console.log(this.categories)
            }
        })

    }
    isDeleted: boolean = false;
    openDialog(modelTemplate: TemplateRef<any>) {
    }

    removeItem(p: Product) {
        if (confirm("Bạn có muốn xóa")) {
            this.proService.removeProduct(p).subscribe((result) => {
                if (!result) {
                    alert("Xóa thành công");
                    this.proService.getAllProducts().subscribe({
                        next: (products: Product[]) => {
                            this.products = products;
                        }
                    })
                }
            })

        }
    }

    btnEdit(product: Product) {
        let selectedProduct = this.products.find((p) => p.productId === product.productId);
        console.log(this.form);
        this.form.setValue({
            productId: selectedProduct.productId,
            productName: selectedProduct.productName,
            category: selectedProduct.category.categoryName,
            productPrice: selectedProduct.productPrice,
            img: selectedProduct.img,
            productDescription: selectedProduct.productDescription
        });
    }
    selectedCategory: Category;

    confirm(p: Product) {
        // this.selectedProduct.productId = p.productId;
        // this.selectedProduct.productName = p.productName;
        // this.selectedProduct.productDescription = p.productDescription
        // this.selectedProduct.productPrice = p.productPrice
        // this.selectedProduct.category = this.selectedCategory;
        // this.selectedProduct.img = p.img;
        this.proService.updateProduct(p).subscribe({
            next: data => {
                if (data == null) {
                    alert("Sửa thành công");
                    this.loadProduct();

                }
            },
            error: error => {
                alert("bạn chưa chọn loại sản phẩm")
            }
        })
    }
    
    btnAdd(product : Product)
    {
        this.proService.addItem(product).subscribe({
            next :(data) => {
                if(data == null)
                {
                    alert("Thêm thành công");
                    this.loadProduct();
                }
            },
            error : (error) =>{
                console.log(error)
                alert(error);
            }
        })
    }




}
