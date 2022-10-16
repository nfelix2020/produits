import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  newProduit: Product= new Product();

  constructor(private productService: ProductService , private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm){

    this.newProduit={

    id: form.value.id,
    productName: form.value.productName,
    shopName:form.value.shopName,
    shopEmail: form.value.shopEmail
    }

    this.addNewProduct(this.newProduit);
    
  }


  addNewProduct(product: Product){
    this.productService.createProduct(product).subscribe((pdt: Product)=>{
      console.log('Le produit ajouté avec success', pdt);
      this.router.navigateByUrl('')
    })
  }

}
