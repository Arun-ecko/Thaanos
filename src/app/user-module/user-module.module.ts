import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component'
import {UserRoutingModule} from './user-auth.routing.module'
import {FormsModule} from'@angular/forms'
import { UserAuthService } from './user-auth.service';
import {SharedModule} from '../shared/shared.module'
import {ProductsModule} from '../products/products.module'


@NgModule({
  declarations: [UserAuthComponent,
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
  exports:[UserAuthComponent,
    UserLoginComponent,
    UserAuthComponent,
    UserRegisterComponent
  ,UserHomeComponent,
 ]
})
export class UserModuleModule {
  providers:[UserAuthService]
 }
