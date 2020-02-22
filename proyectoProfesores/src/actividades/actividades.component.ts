import { Component, OnInit } from '@angular/core';
import { Actividades } from '../clases/actividades';
import { GestionarActividadesService } from '../servicios/gestionar-actividades.service';
import { GestionarFiltroService } from '../servicios/gestionar-filtro.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  
  listaActividades:Actividades[]=[];
  listaActividadesOriginal:Actividades[]=[];
  
  constructor(private gestionarActividades:GestionarActividadesService, private gestionarFiltro:GestionarFiltroService) { }


  ngOnInit() {
    this.getActividades();
    this.gestionarFiltro.filtro.subscribe(filtro=>this.filtrarActividades(filtro));
  }

  getActividades(){
    this.gestionarActividades.getActividades().subscribe(datos=> 
      {
        this.listaActividades=datos;
        this.listaActividadesOriginal=datos;
      }
    );
  }

  filtrar(event){
    this.gestionarFiltro.cambiarFiltro(event.target.value.toLocaleLowerCase());
  }

  filtrarActividades(filtro){
    this.listaActividades=this.listaActividadesOriginal.filter(x=> 
      x.ksNombre.toLocaleLowerCase().indexOf(filtro)!=-1
    );
  }

}
