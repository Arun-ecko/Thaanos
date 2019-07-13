import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any = [];
  constructor(private afauth: AngularFireAuth,
    private database: AngularFirestore,
    private router: Router) { }
  getUserState() {
    return this.afauth.authState;
  }
  login(email: string, password: string) {
    this.afauth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if (userCredential) {
          this.router.navigate(['/home']);
        }
      })
  }
  

  createUser(user) {
    console.log(user);
    this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCreds => {
        this.newUser = user;
        userCreds.user.updateProfile({
          displayName: user.firstname + ' ' + user.lastname
        });
        this.insertNewUser(userCreds)
          .then(() => {
            this.router.navigate(['/home']);
          })
      })
      .catch(error => {
        this.eventAuthError.next(error);
      });

  }
  insertNewUser(userCreds: firebase.auth.UserCredential) {

    console.log(this.newUser.email);
    return this.database.doc(`Users/${userCreds.user.uid}`).set({
      Firstname: this.newUser.firstName,
      email: this.newUser.email,
      Lastname: this.newUser.lastName,
      password: this.newUser.password

    })
    

  }
 
  logout() {
    return this.afauth.auth.signOut();
  }
}
