import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';
import { ProductListComponent, CategoryComponent, ProductDetailComponent } from '../products';


const routes: Routes = [
    {
        path: 'category', component: CategoryComponent
    },
    {
        path: 'productList', component: ProductListComponent
    },
    {
        path: 'productDetail', component: ProductDetailComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },

];

@NgModule({
  imports: [ProductsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
