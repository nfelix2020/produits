import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  // products= PRODUCTS

   allProducts: Product[]=[]

  constructor(private productService: ProductService) { 
  }


  ngOnInit(): void {

    this.getAllProducts();
  }


  getAllProducts(){

   this.productService.getAllProducts().subscribe((data=>{
    this.allProducts=data
   }))
      
  }
}
