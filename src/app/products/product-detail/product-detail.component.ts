import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  ProductDetail: any = [];
  users: object;
  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.detailListSubject$.subscribe(data => {this.ProductDetail.push(data);
                                                              console.log(this.ProductDetail); });

  }
  addToCart(list) {
    this.productService.doAdd(list);
   }

}
