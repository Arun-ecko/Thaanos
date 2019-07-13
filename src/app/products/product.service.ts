import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import{BehaviorSubject} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {UserAuthService} from '../user-module/user-auth.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ListData:any = [];
  selecteddata:any=[];
  cartadd:any=[];
  
  private jsonURL = 'assets/shopping.json';
  private messageSource = new BehaviorSubject('');
currentMessage = this.messageSource.asObservable();
private carting = new BehaviorSubject('');
currentcart = this.carting.asObservable();
  constructor(private http: HttpClient,
    private afAuth:AngularFireAuth,
    private database:AngularFirestore,
    private userauthservice:UserAuthService) 
  { this.getJSON().subscribe(data => {
    this.ListData=data;
    console.log(data);
});

 }
 getState(){
  return this.afAuth.authState;
}
 changeMessage(message: any) {
  console.log("hi");
  this.messageSource.next(message)
  console.log(message);
}
changecart(adding: any) {
  console.log("h555i");
  this.carting.next(adding);
  console.log("previously")
  console.log(adding);
  return adding;
}
 public getJSON(): Observable<any> {
  return this.http.get(this.jsonURL);
}
sort(val){  
  console.log(this.ListData);
 this.selecteddata=this.ListData.filter(data => {
   return data.For == val.target.value ; 
})
 console.log(this.selecteddata);
 return this.selecteddata; 
}
// submitme(enter){
//   this.searcheddata=this.ListData.filter(data=>{
//     return data.For==enter.target.value
//   })
// }
Addto(list){
  alert("add to cart function")
 console.log(list.title);
 console.log(list.price);
// this.cartadd.push(list);
// this.cartadd=this.ListData.filter((cart)=>{
//   return (cart.For==title ) 

// })
console.log(this.cartadd);

return this.cartadd;

}
setCartItem(usercreds:firebase.auth.UserCredential){
  console.log(usercreds);
  alert(usercreds);
}
insertDataToUser(userCreds:firebase.auth.UserCredential){
  return this.database.doc(`Users/${userCreds.user.uid}`).set({
    cart:JSON.parse(localStorage.getItem('cart'))

  })     
}
}










