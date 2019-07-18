import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  selecteddata: any = [];
  jsonArray: any = [];
  constructor(private productService: ProductService, private router: Router, private httpservice: HttpClient) { }


  ngOnInit() {
    this.httpservice.get('./assets/shopping.json').subscribe(data => {
      this.productService.jsonArray = data as string[];
      console.log(this.productService.jsonArray);
    });

  }
  filterCategory(val) {
    console.log(val);
    this.selecteddata = this.productService.filterCategory(val);
    console.log(this.selecteddata);
  }
  redirect() {
    this.router.navigate(['/productList']);

  }
}
