import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
{path:'' , component: ProductsListComponent , pathMatch:'full'},
{path: 'new-product' , component: CreateProductComponent},
{path:'products-list' , component: ProductsListComponent},
{path: 'product-details' , component: ProductDetailsComponent},
{path: '***' , component: ProductNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
