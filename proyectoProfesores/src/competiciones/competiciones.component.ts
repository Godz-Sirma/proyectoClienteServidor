import { Component, OnInit } from '@angular/core';
import { GestionarCompeticionesService } from '../servicios/gestionar-competiciones.service';
import { GestionarFiltroService } from '../servicios/gestionar-filtro.service';
import { Competicion } from '../clases/competicion';

@Component({
  selector: 'app-competiciones',
  templateUrl: './competiciones.component.html',
  styleUrls: ['./competiciones.component.css']
})
export class CompeticionesComponent implements OnInit {

  private listaCompeticiones:Competicion[]=[];
  private listaCompeticionesOriginal:Competicion[]=[];

  constructor(private gestionarCompeticiones:GestionarCompeticionesService,private gestionarFiltro:GestionarFiltroService) { }

  ngOnInit() {
    this.getCompeticiones();
    this.gestionarFiltro.filtro.subscribe(filtro=>this.filtrarCompeticiones(filtro));
  }

  filtrar(event){
    this.gestionarFiltro.cambiarFiltro(event.target.value.toLocaleLowerCase());
  }

  filtrarCompeticiones(filtro){
    this.listaCompeticiones=this.listaCompeticionesOriginal.filter(x=> 
      x.asNombre.toLocaleLowerCase().indexOf(filtro)!=-1||x.asGimnasio.toLocaleLowerCase().indexOf(filtro)!=-1||x.asUbicacion.toLocaleLowerCase().indexOf(filtro)!=-1
    );
  }

  getCompeticiones(){
    this.gestionarCompeticiones.getCompeticiones().subscribe(datos=> 
      {
        this.listaCompeticiones=datos;
        this.listaCompeticionesOriginal=datos;
      }
    );
  }
  

}
