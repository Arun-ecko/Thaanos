import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})


export class ProductService {
  jsonArray: any = [];
  selectedItem: any = [];
  details: any = [];

    // Behavior Subject for Category
  private categorySubject = new BehaviorSubject('');
  categorySubject$ = this.categorySubject.asObservable();


  // Behavior Subject for Displaying the selected item in a Detailed List
  private detailListSubject = new BehaviorSubject('');
  detailListSubject$ = this.detailListSubject.asObservable();


  getProductFromJson(): Observable<any> {
   return this.httpservice.get('./assets/shopping.json');
  }
  constructor(private httpservice: HttpClient) {

  }

  getDetails(product) {
     this.details = product;
     this.detailListSubject.next(this.details);
     return this.details;
  }

  filterCategory(val) {
    this.selectedItem  = this.jsonArray.filter(data => {
      return data.For === val.target.value;
    });
    this.categorySubject.next(this.selectedItem);
    return this.selectedItem;

  }

}










