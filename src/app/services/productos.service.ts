import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  //método o funcion que consume los datos de una API externa (productos)
  getProductos(){
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }
}
