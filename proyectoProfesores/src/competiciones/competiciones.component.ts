import { Component, OnInit } from '@angular/core';
import { GestionarCompeticionesService } from '../servicios/gestionar-competiciones.service';
import { Competiciones } from '../clases/competiciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competiciones',
  templateUrl: './competiciones.component.html',
  styleUrls: ['./competiciones.component.css']
})
export class CompeticionesComponent implements OnInit {

  private listaCompeticiones:Competiciones[]=[];
  private listaCompeticionesOriginal:Competiciones[]=[];

  constructor(private gestionarProfes:GestionarCompeticionesService,private router:Router) { }

  ngOnInit() {
    this.getCompeticiones();
  }

  getCompeticiones(){
    this.gestionarProfes.getProfesores().subscribe(datos=> 
      {
        this.listaCompeticiones=datos;
        this.listaCompeticionesOriginal=datos;
      }
    );
  }

  mostrarDetalles(kiCodigo){
    this.router.navigate(["detallesCompeticiones/"+kiCodigo]);
  }

}
