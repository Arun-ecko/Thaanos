import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../product.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import {Router} from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  gender: any = [];
  cartadd: any = [];
  totalcart: any = [];

  cartvalue: any;
  constructor(private productservice: ProductService,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore, private router: Router) {  }
  user: firebase.User;
  ngOnInit() {
    this.productservice.categorySubject$.subscribe(gender => this.gender = gender);
  }
  addToCart(list) {
    this.productservice.doAdd(list);
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
