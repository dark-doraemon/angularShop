import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadCategoriesComponent } from './components/load-categories/load-categories.component';
import { DetailsproductComponent } from './components/detailsproduct/detailsproduct.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        // children :[
        //     { path: 'productView', component: ProductViewComponent },
        // ]
    },
    { path : 'about', component: LoadCategoriesComponent},
    { path : 'productView', component: ProductViewComponent },
    { path : 'detailProduct', component: DetailsproductComponent},


    { path: '**',component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
