import { Component, OnInit } from '@angular/core';
import { CATEGORIAS } from 'src/app/core/constants/categorias';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  productos = CATEGORIAS[0].productos;

}
