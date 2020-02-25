import { Injectable } from '@angular/core';
import { Sesiones } from '../clases/sesiones';

@Injectable({
  providedIn: 'root'
})
export class GestionarCarritoService {

  constructor() { }

  getCarrito(){
    if(!localStorage.getItem("carrito")){
      this.createCarrito();
    }
    let carrito = localStorage.getItem("carrito");
    return JSON.parse(carrito);
  }

  createCarrito(){
    localStorage.setItem("carrito","[]");
  }

  emptyCarrito(){
    localStorage.removeItem("carrito");
  }

  addToCarrito(clase:Sesiones){
    let carrito = this.getCarrito();
    carrito.push(clase);

    localStorage.setItem("carrito",carrito.JSON.stringify());
    return clase;
  }

  deleteFromCarrito(position){
    let carrito = this.getCarrito();
    return carrito.splice(position,1);
  }
}
