import { Component, OnInit } from '@angular/core';
import { Profesor } from '../clases/profesor';
import { GestionarProfesoresService } from '../servicios/gestionar-profesores.service';
import { GestionarFiltroService } from '../servicios/gestionar-filtro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  private listaProfes:Profesor[]=[];
  private listaProfesOriginal:Profesor[]=[];

  constructor(private gestionarProfes:GestionarProfesoresService,private gestionarFiltro:GestionarFiltroService ,private router:Router) { }

  ngOnInit() {
    this.getProfes();
    this.gestionarFiltro.filtro.subscribe(filtro=>this.filtrar(filtro));
  }

  filtrar2(event){
    this.gestionarFiltro.cambiarFiltro(event.target.value.toLocaleLowerCase());
  }

  filtrar(filtro){
    alert(filtro);
    this.listaProfes=this.listaProfesOriginal.filter(x=> 
      x.asNombre.toLocaleLowerCase().indexOf(filtro)!=-1/*||x.asApellido.toLocaleLowerCase().indexOf(filtro)!=-1*/
      );
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
