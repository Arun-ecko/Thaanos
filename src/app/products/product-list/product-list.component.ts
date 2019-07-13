import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  message:any=[];
  cartadd:any=[];
  totalvalue:any=[];
  total=0;
  price;
  cartvalue:any;
  constructor(private productservice:ProductService,private afAuth:AngularFireAuth
    ,private db:AngularFirestore) { }
  user:firebase.User;
  ngOnInit() {
    this.productservice.getState().subscribe(user=>{this.user=user})
    console.log(this.user)
    this.productservice.currentMessage.subscribe(message => this.message = message)
    console.log("shbdyafg");
    console.log(this.message);
  }
  addto(list){
    // this.clothservice.Addto(list);
     this.cartadd.push(list)
     this.cartadd=this.productservice.changecart(this.cartadd) 
     
     this.price=Number(list.price)
     this.total=Number(this.total)+Number(this.price)
    
       console.log(this.total);
       localStorage.setItem('cart',JSON.stringify(this.cartadd));
     return this.total;
     //this.cartadd.push(this.total);
  
   
   }
   get cart(): any {
    return localStorage.getItem('cart');
}
   totalcartvalue(total){
     this.totalvalue.push(total);
     console.log(this.totalvalue);
     return this.totalcartvalue;
   }
   setCart(){
     console.log("vandhutan")
  //  this.productservice.setCartItem(usercreds:firebase.authUserCredential)
   }
  //  insertdataToUser(){
  //    this.productservice.insertDataToUser();
  //  }


}
