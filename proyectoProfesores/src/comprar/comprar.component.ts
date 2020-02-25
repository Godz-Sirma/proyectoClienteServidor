import { Component, OnInit } from '@angular/core';
import { GestionarCarritoService } from '../servicios/gestionar-carrito.service';
import { GestionarComprarService } from '../servicios/gestionar-comprar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Sesiones } from '../clases/sesiones';
import { Profesor } from '../clases/profesor';
import { Actividades } from '../clases/actividades';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  listaProfesores:Profesor[]=[];
  listaActividades:Actividades[]=[];

  private actividadPasada:string="predefinido";
  private profesorPasado:string="predefinido";
  precio:number=0;



  constructor(private router:Router, private gestionarComprar:GestionarComprarService, private activatedRoute:ActivatedRoute, private gestionarCarrito:GestionarCarritoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param =>{
      this.actividadPasada=param.ksNombre;
      this.profesorPasado=param.kiTitulo;
    });

    this.buscarActividades(this.actividadPasada);
    this.buscarProfesores(this.profesorPasado);
  }

  buscarActividades(event){
    if(event.target.value=="predefinido"){
      this.gestionarComprar.getActividadesGeneral().subscribe(datos=>this.listaActividades=datos);
    }else{
      this.gestionarComprar.getActividadesEspecifico(event.value).subscribe(datos=>this.listaActividades=datos);
    }
    this.actividadPasada=event.target.value;
  }

  buscarProfesores(event){
    if(event.target.value=="predefinido"){
      this.gestionarComprar.getProfesoresGeneral().subscribe(datos=>this.listaProfesores=datos);
    }else{
      this.gestionarComprar.getProfesoresEspecifico(event.value).subscribe(datos=>this.listaProfesores=datos);
    }
    this.profesorPasado=event.target.value;
  }

  buscarPrecio(){
    if(this.actividadPasada=="predefinido"||this.profesorPasado=="predefinido"){
      this.precio=0;
    }else{
      this.gestionarComprar.getPrecio(this.profesorPasado,this.actividadPasada).subscribe(dato=>this.precio=dato);
    }
  }

  reiniciar(){
    this.actividadPasada="predefinido";
    this.profesorPasado="predefinido";
    this.buscarActividades;
    this.buscarProfesores;
    this.buscarPrecio;
  }

  comprar(){
    let sesion:Sesiones;
    sesion;
    this.gestionarCarrito.addToCarrito(sesion);

    this.router.navigate(["carrito"]);
  }

}
