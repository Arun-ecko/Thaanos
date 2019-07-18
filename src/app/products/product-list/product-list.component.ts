import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../product.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import {Router} from '@angular/router';
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
  products: Observable<any >;
  cartvalue: any;
  constructor(private productservice: ProductService,
              private afAuth: AngularFireAuth,
              private userauthservice: UserAuthService,
              private db: AngularFirestore, private router: Router) {  }
  userId: string;
  ngOnInit() {
    this.productservice.categorySubject$.subscribe(gender => this.gender = gender);
    // this.userauthservice.userSubject$.subscribe(userID => this.userId = userID);
    console.log('userID', this.userId);
    this.products = this.db.collection('Users').doc(`${this.userId}`).collection('Cart').doc('UserCart').valueChanges();

    this.afAuth.authState.subscribe((user) => {
      this.userId = user.uid;
    });

  }
  addToCart(list) {
    console.log(this.userId);
    this.cartadd = this.productservice.doAdd(list);
    console.log(this.userId);
    this.db.collection('Users').doc(`${this.userId}`).collection('Cart').doc('UserCart').set({
      cart: this.cartadd
    });
  // this.db.doc(`Users/${this.userId}`).set({
  //   cart: this.cartadd
  // });
    return this.products = this.db.collection('Users').doc(`${this.userId}`).collection('Cart').doc('UserCart').snapshotChanges();
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
