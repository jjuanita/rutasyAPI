import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient) { }

  //método o funcion que consume los datos de la API externa (categorias)
  getCategorias(){
    return this.http.get('https://api.escuelajs.co/api/v1/categories')
  }
}
