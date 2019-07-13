import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartadd:any=[];
iterate:any=[];
i:any;
  constructor(private productservice:ProductService) { 
    this.productservice.currentcart.subscribe(adding =>      
      this.cartadd=adding);
  }
 

  ngOnInit() {
    localStorage.clear()
  }

  removeitem(cartitem){
    this.cartadd = this.cartadd.filter(order => order.title !== cartitem); 
    this.i=this.cartadd.findIndex(cart=>cart.cartitem===this.cartadd.title)
    if(this.i!==-1){
     this.cartadd=this.cartadd.filter(cart=>cart.title!==cartitem)
     localStorage.setItem('cart',JSON.stringify(this.cartadd))
     if(localStorage.length==1){
      localStorage.clear()
    }
   this.iterate.push(JSON.parse(localStorage.getItem('cart')))
    console.log(this.iterate)

    }
    }

  }
