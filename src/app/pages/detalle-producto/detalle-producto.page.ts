import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/interfaces/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  producto:Producto = {
    imagen: 'dsgdfbgs',
    nombre: 'Nombre producto',
    descripcion: 'Descripcion',
    precio: 500
  }

}
