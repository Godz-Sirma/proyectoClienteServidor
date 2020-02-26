import { Injectable } from '@angular/core';
import { Sesiones } from '../clases/sesiones';

@Injectable({
  providedIn: 'root'
})
export class GestionarCarritoService {

  constructor() { }

  getCarrito():Sesiones[]{
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

  deleteFromCarrito(id){
    let carrito = this.getCarrito();
    let position = 0;
    for (let i = 0; i < carrito.length; i++) {
      if(carrito[i].ksCodigo==id){
        position=i;
      }
    }

    carrito.splice(position,1);
    localStorage.setItem("carrito",JSON.stringify(carrito));
  }
}
