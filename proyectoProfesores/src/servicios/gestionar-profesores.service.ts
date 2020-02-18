import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Profesor } from '../clases/profesor';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionarProfesoresService {

  constructor(private http:HttpClient) { }

  private jsonProfesores="http://localhost/Proyecto/profesores.json";
  private jsonProfesor="http://localhost/Proyecto/profesor.php";
  //http://localhost/Proyecto/profesor.php?kiTitulo=1
  
  getProfesores():Observable<Profesor[]>{
    return this.http.get<Profesor[]>(this.jsonProfesores);
  }

  getProfesor(kiTitulo):Observable<Profesor>{
    return this.http.get<Profesor>(this.jsonProfesor+"?kiTitulo="+kiTitulo);
  }
}
