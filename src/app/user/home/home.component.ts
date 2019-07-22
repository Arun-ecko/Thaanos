import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class UserHomeComponent implements OnInit {
  user: firebase.User;
  constructor(private router: Router, private authservice: UserAuthService) { }
  ngOnInit() {
    this.authservice.getUserState().subscribe(user => {
      this.user = user;
    });
  }
login() {
  this.router.navigate(['/login']);
}
logout() {
  this.authservice.logout();
}
register() {
  this.router.navigate(['/register']);
}
}
