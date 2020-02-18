import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Competiciones } from '../clases/competiciones';
import { Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionarCompeticionesService {

  constructor(private http:HttpClient) { }

  private jsonCompeticiones="http://localhost/Proyecto/competiciones.json";

  getProfesores():Observable<Competiciones[]>{
    return this.http.get<Competiciones[]>(this.jsonCompeticiones);
  }

}
