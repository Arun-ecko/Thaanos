import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{ProductService} from '../product.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  selecteddata:any=[];
  constructor(private productService: ProductService,private router:Router) { }
  sort(val){
    this.selecteddata=this.productService.sort(val);
   this.productService.changeMessage(this.selecteddata) ;
   }
   redirect(){
    this.router.navigate(['/productList']); 
   }
    ngOnInit() {
      
  }
  
}
