import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { categoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-load-categories',
    templateUrl: './load-categories.component.html',
    styleUrls: ['./load-categories.component.scss']
})
export class LoadCategoriesComponent implements OnInit {
    categories : Category[];
    constructor(private service : categoryService) {}

    ngOnInit(): void {
        this.service.getAllCategories().subscribe({
            next : (categories : Category[]) =>{
                this.categories = categories;
                console.log(this.categories);
            }
        })
    }


}
