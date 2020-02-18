import { Component, OnInit } from '@angular/core';
import { GestionarCompeticionesService } from '../servicios/gestionar-competiciones.service';
import { Competicion } from '../clases/competicion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competiciones',
  templateUrl: './competiciones.component.html',
  styleUrls: ['./competiciones.component.css']
})
export class CompeticionesComponent implements OnInit {

  private listaCompeticiones:Competicion[]=[];
  private listaCompeticionesOriginal:Competicion[]=[];

  constructor(private gestionarProfes:GestionarCompeticionesService,private router:Router) { }

  ngOnInit() {
    this.getCompeticiones();
  }

  getCompeticiones(){
    this.gestionarProfes.getCompeticiones().subscribe(datos=> 
      {
        this.listaCompeticiones=datos;
        this.listaCompeticionesOriginal=datos;
      }
    );
  }
  

}
