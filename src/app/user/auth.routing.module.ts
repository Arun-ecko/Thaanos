import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './login/login.component';
import { UserRegisterComponent } from './register/register.component';
import { UserHomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'login', component: UserLoginComponent
    },
    {
        path: 'register', component: UserRegisterComponent
    },
    {
        path: 'home', component: UserHomeComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
