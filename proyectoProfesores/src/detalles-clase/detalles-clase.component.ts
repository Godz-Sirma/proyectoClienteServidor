import { Component, OnInit } from '@angular/core';
import { ClasesProfe } from '../clases/clases-profe';
import { ActivatedRoute,Router } from '@angular/router';
import { GestionarClasesProfeService } from '../servicios/gestionar-clases-profe.service';

@Component({
  selector: 'app-detalles-clase',
  templateUrl: './detalles-clase.component.html',
  styleUrls: ['./detalles-clase.component.css']
})
export class DetallesClaseComponent implements OnInit {

  clase:ClasesProfe;
  cargado:boolean=false;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private gestionarClases:GestionarClasesProfeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.gestionarClases.getClase(param.kiCodigo).subscribe(dato=> {this.clase=dato;this.cargado=true;});
    });
  }
  
}
