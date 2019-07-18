import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserAuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ListData: any = [];
  selectedItem: any = [];
  cartArray: any = [];
  // tslint:disable-next-line:ban-types
  total: Number = 0;
  // tslint:disable-next-line:ban-types
  price: Number;
  totalcart: any = [];
  detailProduct: any = [];
  details: any = [];
  display: any = [];

    // Behavior Subject for Category
  private categorySubject = new BehaviorSubject('');
  categorySubject$ = this.categorySubject.asObservable();
    // Behavior Subject for Addition of Products into Cart
  private cartSubject = new BehaviorSubject('');
  cartSubject$ = this.cartSubject.asObservable();
    // Behavior Subject for Displaying the selected item in a Detailed List
  private detailListSubject = new BehaviorSubject('');
  detailListSubject$ = this.detailListSubject.asObservable();
  constructor(private http: HttpClient,
              private afAuth: AngularFireAuth,
              private database: AngularFirestore,
              private userauthservice: UserAuthService) {

  }

  getDetails(product) {
     this.details = product;
     this.detailListSubject.next(this.details);
     return this.details;
  }


  filterCategory(val) {
    console.log(val.target.value);
    console.log(this.ListData);
    this.selectedItem  = this.ListData.filter(data => {
      return data.For === val.target.value;
    });
    this.categorySubject.next(this.selectedItem);
    return this.selectedItem;
  }

  doAdd(list) {
    this.cartArray.push(list);
    localStorage.setItem('Cart', JSON.stringify(this.cartArray));

    this.display = localStorage.getItem(JSON.parse(JSON.stringify('Cart')));
    console.log(this.display);
    this.cartSubject.next(this.cartArray);
  }
  totalcartvalue(price) {
    this.price = Number(price);
    this.total = Number(this.total) + Number(this.price);
    this.totalcart.push(this.total);
    return this.totalcart;
   }
  removeItem(cartitem) {
     this.cartArray = this.cartArray.filter(cart => cart.title !== cartitem);
     localStorage.setItem('Cart', JSON.stringify(this.cartArray));
     console.log(this.cartArray);
     return this.cartArray;
     }

}










