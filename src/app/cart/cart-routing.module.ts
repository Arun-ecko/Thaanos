import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {ProductRoutingModule} from '../products/productrouting.module'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
