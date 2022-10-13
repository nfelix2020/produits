import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService   {

  constructor() { }

  createDb(){
    return {

      products: [
    {id: 1, productName: "Samsung Galaxy", shopName:"Otto", shopEmail: "ottomark@yahoo.com"},
    {id: 2, productName: "Computer", shopName:"Media Markt", shopEmail: "mediamarkt@gmail.com"}
      ]
      
    }
  }
}
