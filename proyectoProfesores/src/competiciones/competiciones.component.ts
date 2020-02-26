import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { GestionarCompeticionesService } from '../servicios/gestionar-competiciones.service';
import { GestionarFiltroService } from '../servicios/gestionar-filtro.service';
import { Competicion } from '../clases/competicion';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})

export class NgbdSortableHeader {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

@Component({
  selector: 'app-competiciones',
  templateUrl: './competiciones.component.html',
  styleUrls: ['./competiciones.component.css']
})
export class CompeticionesComponent implements OnInit {

  listaCompeticiones:Competicion[]=[];
  listaCompeticionesOriginal:Competicion[]=[];

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

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

  ordenarNombre(){
    this.listaCompeticiones.sort(function(a,b){
      if(a.asNombre>b.asNombre){
        return 1;
      }else{
        return -1;
      }
      return 0;
    });
  }

  ordenarUbicacion(){
    this.listaCompeticiones.sort(function(a,b){
      if(a.asUbicacion>b.asUbicacion){
        return 1;
      }else{
        return -1;
      }
      return 0;
    });
  }

  ordenarGimnasio(){
    this.listaCompeticiones.sort(function(a,b){
      if(a.asGimnasio>b.asGimnasio){
        return 1;
      }else{
        return -1;
      }
      return 0;
    });
  }

  ordenarPrecio(){
    this.listaCompeticiones.sort(function(a,b){
      return a.aiCoste-b.aiCoste;
    });
  }
  
  getCompeticiones(){
    this.gestionarCompeticiones.getCompeticiones().subscribe(datos=> 
      {
        this.listaCompeticiones=datos;
        this.listaCompeticionesOriginal=datos;
      }
    );
  }
  
  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction === '') {
      this.listaCompeticiones = this.listaCompeticionesOriginal;
    } else {
      this.listaCompeticiones = [...this.listaCompeticionesOriginal].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
