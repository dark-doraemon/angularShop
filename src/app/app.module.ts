import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadProductsComponent } from './components/load-products/load-products.component';
import { LoadCategoriesComponent } from './components/load-categories/load-categories.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsproductComponent } from './components/detailsproduct/detailsproduct.component';
import { ImageSliderModule } from "./components/imageSlider/imageSlider.module";
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up.component'
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        LoadProductsComponent,
        LoadCategoriesComponent,
        ProductViewComponent,
        HomeComponent,
        NotFoundComponent,
        DetailsproductComponent,
        CartComponent,
        ManageProductsComponent,
        PopUpComponent,
        ManageProductsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ImageSliderModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule
    ]
})
export class AppModule { }
