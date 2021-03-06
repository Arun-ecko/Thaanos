import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserLoginComponent, UserHomeComponent, UserAuthService, UserRegisterComponent, UserRoutingModule } from '../user';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [
    UserRegisterComponent,
    UserLoginComponent,
    UserHomeComponent,

  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    ProductsModule

  ],
  exports: [
    UserLoginComponent,
    UserRegisterComponent,
    UserHomeComponent,
  ]
})
export class UserModuleModule {
  providers: [UserAuthService];
}
