import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Profesor } from '../clases/profesor';
import { Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionarProfesoresService {

  constructor(private http:HttpClient) { }

  private jsonProfesor="http://localhost/Proyecto/profesores.json";

  getProfesores():Observable<Profesor[]>{
    return this.http.get<Profesor[]>(this.jsonProfesor);
  }
}
