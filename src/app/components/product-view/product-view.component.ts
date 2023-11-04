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

    sortProducts()
    {
        const selectTag = document.getElementById('mySelect') as HTMLSelectElement
        if(selectTag.value === 'increasing')
        {
            this.increasingSort()
        }

        if(selectTag.value === 'decreasing')
        {
            this.decreasingSort()
        }

        if(selectTag.value === 'A-Z')
        {
            this.alphabetSort()
        }
    }

    increasingSort() {
        this.products.sort((a, b) => {
            return a.productPrice - b.productPrice
        });
        console.log('tang dan');
    }

    decreasingSort() {
        this.products.sort((a, b) => {
            return b.productPrice - a.productPrice
        });
        console.log('giam dan');

    }

    alphabetSort()
    {
        this.products.sort((a, b) => {
            return a.productName.localeCompare(b.productName)
        });
        console.log('a'.localeCompare('b'));
    }
}