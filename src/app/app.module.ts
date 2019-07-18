import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModuleModule} from './user/user.module';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {ProductsModule} from './products/products.module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    HttpClientModule,
    SharedModule,
    ProductsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
