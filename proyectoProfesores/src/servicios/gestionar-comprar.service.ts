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

  private jsonProfesoresGeneral="http://localhost/Proyecto/profesoresGeneral.json";
  private jsonProfesoresEspecifico="http://localhost/Proyecto/profesoresEspecifico.php";
  private jsonActividadesGeneral="http://localhost/Proyecto/actividadesGeneral.php";
  private jsonActividadesEspecifico="http://localhost/Proyecto/actividadesEspecifico.php";
  private jsonPrecio="http://localhost/Proyecto/precio.php";
  private jsonId="http://localhost/Proyecto/id.php";
//http://localhost/Proyecto/profesor.php?kiTitulo=1

//Busca todos los profes
  getProfesoresGeneral():Observable<Profesor[]>{
    return this.http.get<Profesor[]>(this.jsonProfesoresGeneral);
  }
//Busca los profesores relacionados con una actividad
  getProfesoresEspecifico(ksNombre):Observable<Profesor[]>{
    return this.http.get<Profesor[]>(this.jsonProfesoresEspecifico+"?ksNombre="+ksNombre);
  }
//Busca todas las actividades
  getActividadesGeneral():Observable<Actividades[]>{
    return this.http.get<Actividades[]>(this.jsonActividadesGeneral);
  }
//Busca las actividades que tengan un profesor con ese kiTitulo
  getActividadesEspecifico(kiTitulo):Observable<Actividades[]>{
    return this.http.get<Actividades[]>(this.jsonActividadesEspecifico+"?kiTitulo="+kiTitulo);
  }

//Busca el precio de esa actividad con ese profesor
  getPrecio(kiTitulo,ksNombre):Observable<number>{
    return this.http.get<number>(this.jsonPrecio+"?kiTitulo="+kiTitulo+"&ksNombre="+ksNombre);
  }

//Busca el id de esa actividad con ese profesor 
  getIdClase(kiTitulo,ksNombre):Observable<number>{
    return this.http.get<number>(this.jsonId+"?kiTitulo="+kiTitulo+"&ksNombre="+ksNombre);
  }
}
