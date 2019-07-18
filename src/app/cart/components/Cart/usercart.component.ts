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
  products: Observable<any>;

  constructor(private productservice: ProductService, private afauth: AngularFireAuth,
              private database: AngularFirestore, private userauthservice: UserAuthService ) { }

  ngOnInit() {

    this.productservice.cartSubject$.subscribe(addProduct => this.cartArray = addProduct);
    this.afauth.authState.subscribe((user) => {this.userId = user.uid; });


  }
  removeProduct(cartItem: object) {
    this.cartArray = this.productservice.removeItem(cartItem);
    this.database.collection('Users').doc(`${this.userId}`).collection('Cart').doc('UserCart').update({cart: this.cartArray});
  }



}
