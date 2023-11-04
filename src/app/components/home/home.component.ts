import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SlideInterface } from '../imageSlider/types/slide.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(private router: Router) { }
    slides: SlideInterface[] = [
        { url: 'https://th.bing.com/th/id/R.48ae7063896075ef412c1ecfbc0350c5?rik=es8RJROOMry9JQ&pid=ImgRaw&r=0', title: 'beach' },
        { url: 'https://hinhanhdep.net/wp-content/uploads/2015/12/anh-cho-va-meo-29.jpg', title: 'boat' },
        { url: 'https://hinhanhdep.net/wp-content/uploads/2015/12/anh-cho-va-meo-36.jpg', title: 'forest' },
        { url: 'https://hinhanhdep.net/wp-content/uploads/2015/12/anh-cho-va-meo-28.jpg', title: 'city' },
        { url: 'https://img.meta.com.vn/Data/image/2021/09/21/anh-meo-con-35.jpg', title: 'italy' },
      ];

}
