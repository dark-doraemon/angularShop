import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { categoryService } from 'src/app/services/category.service';
import { productService } from 'src/app/services/product-service.service';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
    categories: Category[];
    products: Product[];
    constructor(private cateService: categoryService, private proService: productService) { }

    ngOnInit(): void {
        this.cateService.getAllCategories().subscribe({
            next: (categories: Category[]) => {
                this.categories = categories;
            }
        })
        this.proService.getAllProducts().subscribe({
            next: (products: Product[]) => {
                this.products = products;
            }
        })
    }

    handleGetAll() {
        this.proService.getAllProducts().subscribe({
            next: (products: Product[]) => {
                this.products = products;
            }
        })
    }

    handleGetProductsByCategory(c: Category) {
        this.proService.getAllProductsByCategoryId(c.categoryId).subscribe({
            next: (products: Product[]) => {
                this.products = products;
            }
        })
    }

    increasingSort() {
        this.products.sort((a, b) => {
            return a.productPrice - b.productPrice
        });
    }
    decreasingSort() {
        this.products.sort((a, b) => {
            return b.productPrice - b.productPrice
        });
    }
}