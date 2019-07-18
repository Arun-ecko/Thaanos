import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class UserLoginComponent implements OnInit {
authError: any;
  constructor(private authservice: UserAuthService) { }

  ngOnInit() {
    this.authservice.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }
  login(frm) {
    this.authservice.login(frm.value.email, frm.value.password);
  }
}
