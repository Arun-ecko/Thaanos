import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/user';
import { ToastrService } from 'ngx-toastr';

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
  cartDetails: any = [];
  userId: string;
  constructor(private productservice: ProductService,
              private afAuth: AngularFireAuth,
              private toastr: ToastrService,
              private db: AngularFirestore, private router: Router) { }
  ngOnInit() {
    this.productservice.categorySubject$.subscribe(gender => this.gender = gender);
    this.db.collection('ProductList').doc('List').valueChanges()
    .subscribe(data => {
      this.products = data;
      this.cartDetails = Object.entries(this.products)[0][1];
      console.log(this.cartDetails);

    });

    this.afAuth.authState.subscribe((user) => {
      this.userId = user.uid;
      console.log('userID', this.userId);
    });
    console.log('userID', this.userId);


  }

  addToCart(list) {


    this.db.collection('Users').doc(`${this.userId}`).collection('Cart').add({
      for: list.For,
      image: list.image,
      price: Number(list.price) ,
      size: list.size,
      title: list.title
      } ).then(docRef => {this.db.collection('Users').doc(`${this.userId}`).collection ('Cart').doc(docRef.id).update({
      for: list.For,
      image: list.image,
      price: Number(list.price) ,
      size: list.size,
      title: list.title,
      id: docRef.id

    });

  });

  }

  showCartMessage() {
    this.toastr.success('Your Cart has been updated with 1 item');
  }

  getDetails(product) {
    this.productservice.getDetails(product);
  }
  redirectToDetails() {
    this.router.navigate(['/productDetail']);
  }
  redirectToCart() {
    this.router.navigate(['/cart']);
  }


}
