import { Component, OnInit } from '@angular/core';
import { Categoria } from '../core/interfaces/categoria';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  
  categorias:Categoria[]= [
    {
      nombre:'Hambuguesas',
      id: 1,
      fotoUrl: "https://adrianacotte.com/wp-content/uploads/2021/05/hamburguesa01.jpeg"
    } ,
    {
      nombre:'Pizzas',
      id: 2,
      fotoUrl: "https://img-global.cpcdn.com/recipes/5422e9144d489156/1200x630cq70/photo.jpg"
    } ,
    {
      nombre:'Postres',
      id: 3,
      fotoUrl: "https://i.blogs.es/d519e3/tarta-de-queso-y-cafe-sin-horno/840_560.jpeg"
    },
    {
      nombre:'Bebidas',
      id: 4,
      fotoUrl: "https://pizzbur.com/wp-content/uploads/2016/05/20-datos-curiosos-sobre-bebidas-1920.jpg"
    }
    ]
  
  
}
