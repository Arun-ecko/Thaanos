import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserAuthService } from 'src/app/user';
import { Observable } from 'rxjs';

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
  products: {};
  product: Observable<any[]>;
  docRef: any;
  cartItems: any = [];

  constructor(private productservice: ProductService, private afauth: AngularFireAuth,
              private database: AngularFirestore, private userauthservice: UserAuthService ) {

               }

  ngOnInit() {

    this.productservice.cartSubject$.subscribe(addProduct => this.cartArray = addProduct);
    this.afauth.authState.subscribe((user) => {
      this.userId = user.uid;
      this.database.collection('Users').doc(`${this.userId}`).collection('Cart').doc('UserCart').valueChanges()
      .subscribe(data => {
        console.log(typeof data);
        this.products = data;
        console.log(JSON.stringify(this.products));
        console.log(Object.entries(this.products)[0][1]);
        this.cartItems = Object.entries(this.products)[0][1];
        console.log(this.cartItems);

      });
    });
  }
  removeProduct(cartItem: object) {
    this.cartArray = this.productservice.removeItem(cartItem);
    this.database.collection('Users').doc(`${this.userId}`).collection('Cart').doc('UserCart').update({cart: this.cartArray});
  }
  getCartDetails() {
     }


    }





