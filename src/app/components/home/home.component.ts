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
        { url: 'https://file.hstatic.net/200000722513/file/gearvn-pc-gaming-slider_c93d0e6bd9e547b8922314571e1d3ef2.jpg', title: '' },
        { url: 'https://file.hstatic.net/200000722513/file/gearvn-mua-kem-pc-laptop-slider_f1a31ee0614d479d995b45fe48d06344.jpg', title: '' },
        { url: 'https://file.hstatic.net/200000722513/file/6_20f8dbf6da254794805e8449bcff3adb.png', title: '' },
        { url: 'https://file.hstatic.net/200000722513/file/gearvn_800x400_52c710aad7be4c01b6aaa14e3b62ae08.jpg', title: '' },
        { url: 'https://file.hstatic.net/200000722513/file/gearvn-man-hinh-slider_eaff9f7f61cc4f5e953239b3e3a608a9.jpg', title: '' },
    ];

}
