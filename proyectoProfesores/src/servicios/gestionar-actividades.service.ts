import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Actividades } from '../clases/actividades';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionarActividadesService {

  constructor(private http:HttpClient) { }

  private jsonActividades="http://localhost/Proyecto/actividades.json";
  
  getActividades():Observable<Actividades[]>{
    return this.http.get<Actividades[]>(this.jsonActividades);
  }
}
