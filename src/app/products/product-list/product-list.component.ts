import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/user';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  gender: any = [];
  cartadd: any = [];
  totalcart: any = [];
  products: any = [];
  cartvalue: any;
  cartDetails: any = [];
  userId: string;
  constructor(private productservice: ProductService,
              private afAuth: AngularFireAuth,
              private userauthservice: UserAuthService,
              private db: AngularFirestore, private router: Router) { }
  ngOnInit() {
    this.productservice.categorySubject$.subscribe(gender => this.gender = gender);
    this.db.collection('ProductList').doc('List').valueChanges()
    .subscribe(data => {
      this.products = data;
      console.log(JSON.stringify(this.products));
      this.cartDetails = Object.entries(this.products)[0][1];
      console.log(this.cartDetails);



    });

    this.afAuth.authState.subscribe((user) => {
      this.userId = user.uid;
      console.log('userID', this.userId);
      this.db.collection('Users').doc(`${this.userId}`).collection('Cart').doc('UserCart').valueChanges()
        .subscribe(data => {
          console.log(data);
        });
    });
    console.log('userID', this.userId);


  }

  addToCart(list) {
    console.log(this.userId);
    this.cartadd = this.productservice.doAdd(list);
    console.log(this.userId);
    if (this.db.collection('Users').doc(`${this.userId}`) != null) {
    this.db.collection('Users').doc(`${this.userId}`).collection('Cart').doc('UserCart').set({
      cart: this.cartadd
    });
  }
    if (this.db.collection('Users').doc(`${this.userId}`) == null) {
      this.db.collection('Users').doc('TempUser').collection('Cart').doc('UserCart').set({
        cart: this.cartadd
      });
  }
  }

  getDetails(product) {
    this.productservice.getDetails(product);
  }
  redirectToDetails() {
    this.router.navigate(['/productDetail']);
  }
  reDirectToCart() {
    this.router.navigate(['/cart']);
  }
  totalcartvalue(total) {
    console.log(total);
    this.totalcart = this.productservice.totalcartvalue(total);
  }


}
