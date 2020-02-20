import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionarFiltroService {

  public filtro:any =new EventEmitter();
  // public filtroEnviado = this.filt.asObservable();
  
  constructor() { }

  public cambiarFiltro(filtr:string):void{
    this.filtro.emit(filtr);
  }
}
