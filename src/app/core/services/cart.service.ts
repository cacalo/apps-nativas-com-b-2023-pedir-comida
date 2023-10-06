import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carrito: ProductoCarrito[] = [];
  totalCarrito: number = 0;

  constructor(){
    const guardado = localStorage.getItem("carrito");
    if(guardado){
      this.carrito = JSON.parse(guardado);
      this.calcularTotal()
    }
  }

  agregarAlCarrito(producto:Producto,cantidad:number){
    const productoActual:ProductoCarrito = {
      cantidad: cantidad,
      producto: producto
    }
    this.carrito.push(productoActual);
    console.log(this.carrito)
    this.guardarLocalStorage()
    this.calcularTotal()
  }

  eliminarProducto(){
    this.guardarLocalStorage()
    this.calcularTotal()
  }

  vaciarCarrito(){
    this.guardarLocalStorage();
    this.calcularTotal();
  }

  cambiarCantidad(){
    this.guardarLocalStorage();
    this.calcularTotal();
  }

  guardarLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(this.carrito))
  }

  calcularTotal(){
    let subtotal = 0;
    this.carrito.forEach(item => {
      subtotal = subtotal + item.cantidad * item.producto.precio
    })
    this.totalCarrito = subtotal;
  }
}
