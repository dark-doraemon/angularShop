import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadProductsComponent } from './components/load-products/load-products.component';
import { LoadCategoriesComponent } from './components/load-categories/load-categories.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        LoadProductsComponent,
        LoadCategoriesComponent,
        ProductViewComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
