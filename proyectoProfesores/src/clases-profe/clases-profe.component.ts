import { Component, OnInit } from '@angular/core';
import { GestionarClasesProfeService } from '../servicios/gestionar-clases-profe.service';
import { GestionarFiltroService } from '../servicios/gestionar-filtro.service';
import { Router } from '@angular/router';
import { ClasesProfe } from '../clases/clases-profe';

@Component({
  selector: 'app-clases-profe',
  templateUrl: './clases-profe.component.html',
  styleUrls: ['./clases-profe.component.css']
})
export class ClasesProfeComponent implements OnInit {

  
  private listaClases:ClasesProfe[]=[];
  private listaClasesOriginal:ClasesProfe[]=[];

  constructor(private gestionarClases:GestionarClasesProfeService,private gestionarFiltro:GestionarFiltroService ,private router:Router) { }

  ngOnInit() {
    this.getClases();
    this.gestionarFiltro.filtro.subscribe(filtro=>this.filtrarClases(filtro));
  }

  filtrar(event){
    this.gestionarFiltro.cambiarFiltro(event.target.value.toLocaleLowerCase());
  }

  filtrarClases(filtro){
    this.listaClases=this.listaClasesOriginal.filter(x=> 
      x.ksActividad.toLocaleLowerCase().indexOf(filtro)!=-1||x.ksTituloProfe.toLocaleLowerCase().indexOf(filtro)!=-1
    );
  }

  getClases(){
    this.gestionarClases.getClases().subscribe(datos=> 
      {
        this.listaClases=datos;
        this.listaClasesOriginal=datos;
      }
    );
  }

  mostrarDetalles(kiCodigo){
    this.router.navigate(["detallesClase/"+kiCodigo]);
  }


}
