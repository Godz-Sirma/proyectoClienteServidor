import { Component, OnInit } from '@angular/core';
import { GestionarCarritoService } from '../../servicios/gestionar-carrito.service';
import { Sesiones } from '../../clases/sesiones';
import { Actividades } from '../../clases/actividades';
import { Profesor } from '../../clases/profesor';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito:Sesiones[]=[];

  constructor(private GestionarCarrito:GestionarCarritoService) { }

  ngOnInit() {
    this.getCarrito();
  }
  
  getCarrito(){
    this.carrito=this.GestionarCarrito.getCarrito();
  }
  
  borrarSesion(id){
    this.GestionarCarrito.deleteFromCarrito(id);
    this.getCarrito();
  }

}
