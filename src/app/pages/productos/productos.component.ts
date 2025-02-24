import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {

  //propiedad en la que se almacena la data recibida (productos)
  data:any[] = [];

  constructor(private productosService:ProductosService){}

  ngOnInit(): void{
    this.productosService.getProductos().subscribe((products:any[''])=>{
      this.data = products;
    });
  }
}


