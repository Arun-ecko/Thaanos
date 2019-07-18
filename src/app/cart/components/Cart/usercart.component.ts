import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.scss']
})
export class UsercartComponent implements OnInit {
  cartArray: any = [];
  users: object;

  constructor(private productservice: ProductService) { }

  ngOnInit() {

    this.productservice.cartSubject$.subscribe(addProduct =>
      this.cartArray = addProduct);


  }
  removeProduct(cartItem: object) {
    this.cartArray = this.productservice.removeItem(cartItem);

  }

}
