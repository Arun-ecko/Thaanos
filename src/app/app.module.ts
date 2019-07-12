import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModuleModule} from './user-module/user-module.module';
import {SharedModule} from './shared/shared.module'

import { UserAuthComponent } from './user-module/user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    SharedModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
