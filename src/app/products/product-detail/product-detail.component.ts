import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  ProductDetail: any = [];
  users: object;
  userId: string;
  constructor(private productService: ProductService, private database: AngularFirestore, private afauth: AngularFireAuth) { }

  ngOnInit() {

    this.productService.detailListSubject$.subscribe(data => {this.ProductDetail.push(data);
    });
    this.afauth.authState.subscribe((user) => {
      this.userId = user.uid;
      console.log('userID', this.userId);
    });

  }
  addToCart(list) {
    this.database.collection('Users').doc(`${this.userId}`).collection('Cart').add({
      for: list.For,
      image: list.image,
      price: Number(list.price) ,
      size: list.size,
      title: list.title
    } ).then(docRef => {this.database.collection('Users').doc(`${this.userId}`).collection('Cart').doc(docRef.id).update({
      for: list.For,
      image: list.image,
      price: Number(list.price) ,
      size: list.size,
      title: list.title,
      id: docRef.id

    });

  });

   }

}
