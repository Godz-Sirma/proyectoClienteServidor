import { Component, OnInit } from '@angular/core';
import { Profesor } from '../clases/profesor';
import { ActivatedRoute,Router } from '@angular/router';
import { GestionarProfesoresService } from '../servicios/gestionar-profesores.service';

@Component({
  selector: 'app-detalles-profe',
  templateUrl: './detalles-profe.component.html',
  styleUrls: ['./detalles-profe.component.css']
})
export class DetallesProfeComponent implements OnInit {
  profesor:Profesor;
  cargado:boolean=false;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private gestionarProfesor:GestionarProfesoresService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.gestionarProfesor.getProfesor(param.kiTitulo).subscribe(dato=> {this.profesor=dato;this.cargado=true;});
    });
  }

}
