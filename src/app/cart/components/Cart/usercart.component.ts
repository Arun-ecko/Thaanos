import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.scss']
})
export class UsercartComponent implements OnInit {
  cartArray: any = [];
  users: object;
  display: any = [];
  userId: string;
  products: [];
  cartItems: any = [];
  id: string;

  constructor(private afauth: AngularFireAuth,
              private database: AngularFirestore ) {}

  ngOnInit() {

    this.afauth.authState.subscribe((user) => {
      this.userId = user.uid;
      this.database.collection('Users').doc(`${this.userId}`).collection('Cart').valueChanges()
        .subscribe(data => {
          this.cartItems = data;
        });


    });
    }
    removeProduct(docID) {
    this.database.collection('Users').doc(`${this.userId}`).collection('Cart').doc(docID).delete();
    }



}
