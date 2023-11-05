import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlideInterface } from '../imageSlider/types/slide.interface';
import { productService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: Product[];
    constructor(private router: Router, private service: productService) { }
    ngOnInit(): void {

        this.service.getAllProducts().subscribe({
            next: (products: Product[]) => {
                this.products = products;
            }
        })
        console.log(this.products)
    }
    
    slides: SlideInterface[] = [
        { url: 'https://th.bing.com/th/id/R.48ae7063896075ef412c1ecfbc0350c5?rik=es8RJROOMry9JQ&pid=ImgRaw&r=0', title: 'beach' },
        { url: 'https://hinhanhdep.net/wp-content/uploads/2015/12/anh-cho-va-meo-29.jpg', title: 'boat' },
        { url: 'https://hinhanhdep.net/wp-content/uploads/2015/12/anh-cho-va-meo-36.jpg', title: 'forest' },
        { url: 'https://hinhanhdep.net/wp-content/uploads/2015/12/anh-cho-va-meo-28.jpg', title: 'city' },
        { url: 'https://img.meta.com.vn/Data/image/2021/09/21/anh-meo-con-35.jpg', title: 'italy' },
    ];

}
