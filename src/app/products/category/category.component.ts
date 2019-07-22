import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
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
              private database: AngularFirestore) { }


  ngOnInit() {
     this.productService.getProductFromJson().subscribe(data => {
      this.productService.jsonArray = data ;
     });

  }
  filterCategory(val) {
   this.selecteddata = this.productService.filterCategory(val);
   this.database.collection('ProductList').doc('List').set({Products: this.selecteddata});
  }
  redirect() {
    this.router.navigate(['/productList']);

  }
}
