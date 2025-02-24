import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {

  //propuedad en la que se almacena la data recibida (categorias)
  data:any[] = [];

  constructor(private categoriasService:CategoriasService){}

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe((categorias:any[''])=>{
      this.data = categorias;
    })
  }

}
