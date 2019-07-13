import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule} from '../products/productrouting.module';
import {CartComponent} from '../products/cart/cart.component'
//import {SharedModule} from '../shared/shared.module'



@NgModule({
  declarations: [CategoryComponent, ProductListComponent, ProductDetailComponent,CartComponent],
  imports: [
    CommonModule,
  
   // SharedModule
  // ProductRoutingModule
  ],
  exports:[CategoryComponent,ProductDetailComponent,ProductListComponent,CartComponent]
})
export class ProductsModule { }
