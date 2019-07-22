import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  selecteddata: any = [];
  jsonArray: any = [];
  constructor(private productService: ProductService,
              private router: Router,
              private httpservice: HttpClient, private afAuth: AngularFireAuth,
              private database: AngularFirestore) { }


  ngOnInit() {
     this.httpservice.get('./assets/shopping.json').subscribe(data => {
      this.productService.jsonArray = data as string[];
      console.log(this.productService.jsonArray);
     });

  }
  filterCategory(val) {
    console.log(val);
    this.selecteddata = this.productService.filterCategory(val);
    console.log('filteredArray', this.selecteddata);
    this.database.collection('ProductList').doc('List').set({Products: this.selecteddata});
  }
  redirect() {
    this.router.navigate(['/productList']);

  }
}
