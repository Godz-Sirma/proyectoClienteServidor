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
  
  actividadPasada:string="predefinido";
  profesorPasado:string="predefinido";
  fecha:string="";
  precio:number=0;
  nombreProfesor:string="";
  id:number=0;

  constructor(private router:Router, private gestionarComprar:GestionarComprarService, private activatedRoute:ActivatedRoute, private gestionarCarrito:GestionarCarritoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param =>{
      this.actividadPasada=param.ksNombre;
      this.profesorPasado=param.kiTitulo;
    });

    this.getActividades(this.actividadPasada);
    this.getProfesores(this.profesorPasado);
    this.buscarPrecio();
    this.getIdClase();
  }

  getActividades(param){
    if(param=="predefinido"){
      this.gestionarComprar.getActividadesGeneral().subscribe(datos=>this.listaActividades=datos);
    }else{
      this.gestionarComprar.getActividadesEspecifico(param).subscribe(datos=>this.listaActividades=datos);
    }
    this.buscarPrecio();
    this.getIdClase();
  }

  buscarActividades(event){

    if(event.target.value=="predefinido"){
      this.gestionarComprar.getActividadesGeneral().subscribe(datos=>this.listaActividades=datos);
    }else{
      this.gestionarComprar.getActividadesEspecifico(event.target.value).subscribe(datos=>this.listaActividades=datos);
    }
    this.profesorPasado=event.target.value;
    this.buscarPrecio();
    this.getIdClase();
  }

  getProfesores(param){
    if(param=="predefinido"){
      this.gestionarComprar.getProfesoresGeneral().subscribe(datos=>this.listaProfesores=datos);
    }else{
      this.gestionarComprar.getProfesoresEspecifico(param).subscribe(datos=>this.listaProfesores=datos);
    }
    this.buscarPrecio();
    this.getIdClase();
  }

  buscarProfesores(event){
    if(event.target.value=="predefinido"){
      this.gestionarComprar.getProfesoresGeneral().subscribe(datos=>this.listaProfesores=datos);
    }else{
      this.gestionarComprar.getProfesoresEspecifico(event.target.value).subscribe(datos=>this.listaProfesores=datos);
    }
    this.actividadPasada=event.target.value;
    this.buscarPrecio();
    this.getIdClase();
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
    this.getActividades(this.actividadPasada);
    this.getProfesores(this.profesorPasado);
    this.buscarPrecio();
    this.getIdClase();
  }

  comprar(){

    if(this.actividadPasada=="predefinido"||this.profesorPasado=="predefinido"||this.id==0){
      alert("Falta rellenar algun campo");
    }else{
      let sesion:Sesiones={"ksCodigo":"codigo","kiClase":1,"aiPrecio":1,"kiFecha":"fecha"};
      sesion.ksCodigo="";
      sesion.ksCodigo+=this.id+this.fecha+this.precio;
      sesion.aiPrecio=this.precio;
      sesion.kiFecha=this.fecha;
      sesion.kiClase=this.id;
      this.gestionarCarrito.addToCarrito(sesion);
      console.log(sesion);
  
      this.router.navigate(["carrito"]);
    }
  }

  getIdClase(){
    this.gestionarComprar.getIdClase(this.profesorPasado,this.actividadPasada).subscribe(dato=>this.id=dato);
    return this.id;
  }

}
