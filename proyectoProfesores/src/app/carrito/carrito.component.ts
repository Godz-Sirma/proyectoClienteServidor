import { Component, OnInit } from '@angular/core';
import { GestionarCarritoService } from '../../servicios/gestionar-carrito.service';
import { Sesiones } from '../../clases/sesiones';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  private carrito:Sesiones[]=[];

  constructor(private GestionarCarrito:GestionarCarritoService) { }

  ngOnInit() {
    this.getCarrito();
  }

  getCarrito(){
    this.carrito=this.GestionarCarrito.getCarrito();
  }

  borrar(){
    
  }

  borrarSesion(id){
    this.GestionarCarrito.deleteFromCarrito(id);
    this.getCarrito();
  }

}
