import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products =  [
    {
      name: 'Webcam',
      priice: 100
    },
    {
      name:  'Microphone',
      priice: 200
    },
    {
      name: 'Wireless keyboard',
      priice: 85
    }
  ];

  constructor() { }

  getProducts() :Observable<Product[]> {
    return of(this.products);

  }
}
