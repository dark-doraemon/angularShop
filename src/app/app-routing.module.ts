import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadCategoriesComponent } from './components/load-categories/load-categories.component';
import { DetailsproductComponent } from './components/detailsproduct/detailsproduct.component';
import { CartComponent } from './components/cart/cart.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            // { path: 'productView', component: ProductViewComponent },
            // { path: 'detailsProduct/:productId', component: DetailsproductComponent },

        ]
    },
    { path: 'manageProducts', component :ManageProductsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'productView', component: ProductViewComponent },
    { path: 'detailsProduct/:productId', component: DetailsproductComponent },
    { path: 'cart', component: CartComponent },

    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
