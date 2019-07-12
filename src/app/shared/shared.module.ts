import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {ProductRoutingModule} from '../products/Product.Routing.module'
import {ProductsModule} from'../products/products.module'
//import {SharedRoutingModule} from './Shared.routing.module'
import {NavigationBarComponent} from './Shared-Components/navigation-bar/navigation-bar.component'
@NgModule({
  declarations: [ NavigationBarComponent],
  imports: [
    CommonModule,
   // ProductRoutingModule,
    ProductsModule,
   // SharedRoutingModule
  ],
  exports:[NavigationBarComponent]
})
export class SharedModule { }
