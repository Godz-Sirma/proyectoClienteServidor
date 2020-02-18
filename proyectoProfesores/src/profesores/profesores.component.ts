import { Component, OnInit } from '@angular/core';
import { Profesor } from '../clases/profesor';
import { GestionarProfesoresService } from '../servicios/gestionar-profesores.service';
// import { } from ''; Filtro!!
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  private listaProfes:Profesor[]=[];
  private listaProfesOriginal:Profesor[]=[];

  constructor(private gestionarProfes:GestionarProfesoresService,/*filtro,*/private router:Router) { }

  ngOnInit() {
    this.getProfes();
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
