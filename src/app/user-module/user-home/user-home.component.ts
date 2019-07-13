import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  user:firebase.User;

  constructor(private router:Router,private authservice:UserAuthService) { }

  ngOnInit() {
    this.authservice.getUserState().subscribe(user=>{
      this.user= user;
      console.log(user);
    })
  }
login(){
  this.router.navigate(['/login']);
}
logout(){
  this.authservice.logout();
}
register(){
  this.router.navigate(['/register'])
}
}
