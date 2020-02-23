import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Profesor } from '../clases/profesor';
import { Actividades } from '../clases/actividades';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionarComprarService {

  constructor(private http:HttpClient) { }

  private jsonProfesores="http://localhost/Proyecto/profesores.json";
  private jsonProfesor="http://localhost/Proyecto/profesor.php";
  private jsonActividades="http://localhost/Proyecto/actividades.php";
  private jsonactividad="http://localhost/Proyecto/actividad.php";


  //http://localhost/Proyecto/profesor.php?kiTitulo=1
  
  getProfesores():Observable<Profesor[]>{
    return this.http.get<Profesor[]>(this.jsonProfesores);
  }
//Añadir los casos de prueba
  getActividades():Observable<Profesor[]>{
    return this.http.get<Profesor[]>(this.jsonProfesores);
  }

}
