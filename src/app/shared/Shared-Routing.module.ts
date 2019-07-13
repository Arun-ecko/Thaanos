import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { CategoryComponent } from '../products/category/category.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { UserModuleModule } from '../user-module/user-module.module';


const routes: Routes = [
    {
        path:'category',component:CategoryComponent
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
 
    // {
    //     path: 'category',
    //     loadChildren: () => import('../products/products.module').then(mod => mod.ProductsModule)
    //   },
    //   {
    //     path: 'productList',
    //     loadChildren: () => import('../products/products.module').then(mod => mod.ProductsModule)
    //   },
    //   {
    //     path: 'productDetail',
    //     loadChildren: () => import('../products/products.module').then(mod => mod.ProductsModule)
    //   }

];

@NgModule({
  imports: [ProductsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
