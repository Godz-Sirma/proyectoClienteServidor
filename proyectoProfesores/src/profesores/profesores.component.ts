import { Component, OnInit } from '@angular/core';
import { GestionarProfesoresService } from '../servicios/gestionar-profesores.service';
import { GestionarFiltroService } from '../servicios/gestionar-filtro.service';
import { Router } from '@angular/router';
import { Profesor } from '../clases/profesor';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  listaProfes:Profesor[]=[];
  listaProfesOriginal:Profesor[]=[];

  constructor(private gestionarProfes:GestionarProfesoresService,private gestionarFiltro:GestionarFiltroService ,private router:Router) { }

  ngOnInit() {
    this.getProfes();
    this.gestionarFiltro.filtro.subscribe(filtro=>this.filtrarProfesores(filtro));
  }

  filtrar(event){
    this.gestionarFiltro.cambiarFiltro(event.target.value.toLocaleLowerCase());
  }

  filtrarProfesores(filtro){
    this.listaProfes=this.listaProfesOriginal.filter(x=> 
      x.asNombre.toLocaleLowerCase().indexOf(filtro)!=-1/*||x.asApellido.toLocaleLowerCase().indexOf(filtro)!=-1*/
    );
  }

  ordenarNombre(){
    this.listaProfes.sort(function(a,b){
      if(a.asNombre>b.asNombre){
        return 1;
      }else{
        return -1;
      }
      return 0;
    });
  }

  getProfes(){
    this.gestionarProfes.getProfesores().subscribe(datos=> 
      {
        this.listaProfes=datos;
        this.listaProfesOriginal=datos;
      }
    );
  }

  mostrarDetalles(kiTitulo){
    this.router.navigate(["detallesProfe/"+kiTitulo]);
  }

}
