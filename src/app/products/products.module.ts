import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../products';
import { ProductListComponent } from '../products';
import { ProductDetailComponent } from '../products';
import { ProductService } from '../products';
import {CartModule} from '../cart/cart.module';




@NgModule({
  declarations: [CategoryComponent, ProductListComponent, ProductDetailComponent, ],
  imports: [
    CommonModule,
    CartModule
  ], providers: [ProductService],
  exports: [CategoryComponent, ProductDetailComponent, ProductListComponent, ]
})
export class ProductsModule { }
