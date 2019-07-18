import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductsModule} from '../products/products.module';
import {SharedRoutingModule} from './Shared-Routing.module';
import {NavigationBarComponent} from './components/navigation-bar';
@NgModule({
  declarations: [ NavigationBarComponent],
  imports: [
    CommonModule,

    ProductsModule,
   SharedRoutingModule
  ],
  exports: [NavigationBarComponent]
})
export class SharedModule { }
