import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../products';
import { CategoryComponent } from '../products';
import { ProductDetailComponent } from '../products';
import { CartModule } from '../cart/cart.module';
import { UsercartComponent } from '../cart';



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
        path: 'cart', component: UsercartComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },



];

@NgModule({
    imports: [CartModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
