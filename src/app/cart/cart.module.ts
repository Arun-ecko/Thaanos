import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { UsercartComponent } from './components/Cart/usercart.component';

@NgModule({
  declarations: [ UsercartComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [UsercartComponent]
})
export class CartModule { }
