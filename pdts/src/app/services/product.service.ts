import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  serverUrl="api/products"

  constructor(private http: HttpClient) { }

  //Afficher tous les produits

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.serverUrl).
    pipe(
      //catchError(this.handleError('getHeroes', []))
    );
  }




  
}
