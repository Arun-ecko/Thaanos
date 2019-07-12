import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
//import { ProductRoutingModule} from './Product.Routing.module'

@NgModule({
  declarations: [CategoryComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
  //  ProductRoutingModule
  ]
})
export class ProductsModule { }
