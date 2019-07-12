import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user-auth.service'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  authError:any;
  constructor(private authservice:UserAuthService) { }

  ngOnInit() {
    this.authservice.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }
  
  createUser(form){
    this.authservice.createUser(form.value);
  }

}
