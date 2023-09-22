import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carrito: ProductoCarrito[] = []

  agregarAlCarrito(producto:Producto,cantidad:number){
    const productoActual:ProductoCarrito = {
      cantidad: cantidad,
      producto: producto
    }
    this.carrito.push(productoActual);
    console.log(this.carrito)
  }

  eliminarProducto(){
  }

  vaciarCarrito(){
  }

  cambiarCantidad(){
  }
}
