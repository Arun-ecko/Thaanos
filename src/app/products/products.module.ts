import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent, ProductListComponent, ProductDetailComponent, ProductService } from '../products';
import { CartModule } from '../cart/cart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [CategoryComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    CartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ], providers: [ProductService],
  exports: [CategoryComponent, ProductDetailComponent, ProductListComponent]
})
export class ProductsModule { }
