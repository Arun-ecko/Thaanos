import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
    {
        path: 'login',component:UserLoginComponent
    },
    {
        path:'register',component:UserRegisterComponent
    },
    {
        path:'home',component:UserHomeComponent
    },
    {
        path:'',redirectTo:'/home',pathMatch:'full'
    },
   
    // {
    //     path: 'category',
    //     loadChildren: () => import('../shared/shared.module').then(mod => mod.SharedModule)
    //   },
    //   {
    //     path: 'productList',
    //     loadChildren: () => import('../shared/shared.module').then(mod => mod.SharedModule)
    //   },
    //   {
    //     path: 'productDetail',
    //     loadChildren: () => import('../shared/shared.module').then(mod => mod.SharedModule)
    //   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
