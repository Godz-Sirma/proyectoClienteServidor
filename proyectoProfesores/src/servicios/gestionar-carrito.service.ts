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

  addToCarrito(sesion:Sesiones){
    let carrito = this.getCarrito();
    carrito.push(sesion);

    localStorage.setItem("carrito",JSON.stringify(carrito));
    return sesion;
  }

  deleteFromCarrito(position){
    let carrito =[]
    carrito= this.getCarrito();
    carrito.splice(position,1);
  }
}
