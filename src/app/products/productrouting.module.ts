import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { CategoryComponent } from '../products/category/category.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { UserModuleModule } from '../user-module/user-module.module';


const routes: Routes = [
    {
        path: 'category',component:CategoryComponent
    },
    {
        path:'productList',component:ProductListComponent
    },
    {
        path:'productDetail',component:ProductDetailComponent
    },
    {
        path:'',redirectTo:'/home',pathMatch:'full'
    },
 
  

];

@NgModule({
  imports: [ProductsModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
