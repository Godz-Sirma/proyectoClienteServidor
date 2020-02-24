import { Component, OnInit } from '@angular/core';
import { GestionarCarritoService } from '../servicios/gestionar-carrito.service';
import { GestionarComprarService } from '../servicios/gestionar-comprar.service';
import { Router } from '@angular/router';
import { Sesiones } from '../clases/sesiones';
import { Profesor } from '../clases/profesor';
import { Actividades } from '../clases/actividades';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  private listaProfesores:Profesor[]=[];
  private listaActividades:Actividades[]=[];

  private actividadPasada:string="predefinido";
  private profesorPasado:string="predefinido";

  constructor(private gestionarComprar: GestionarComprarService) { }

  ngOnInit() {
    this.buscarActividades(this.actividadPasada);
    this.buscarProfesores(this.profesorPasado);
  }

  buscarActividades(event){
  this.gestionarComprar.getActividades().subscribe( actividades => {
    this.listaActividades = actividades;
    if (EventSource.value =="predefinido"){
      this.gestionarComprar.getProfesores()
    } else {

    }
  });    
  }

  buscarProfesores(event){

  }

  comprar(){

  }

}
