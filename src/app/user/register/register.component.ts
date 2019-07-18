import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  authError: any;
  constructor(private authservice: UserAuthService) { }

  ngOnInit() {
    this.authservice.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }
  createUser(form) {
    this.authservice.createUser(form.value);
  }

}
