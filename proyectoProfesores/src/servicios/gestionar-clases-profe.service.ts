import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ClasesProfe } from '../clases/clases-profe';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionarClasesProfeService {

  constructor(private http:HttpClient) { }

  private jsonClases="http://localhost/Proyecto/clases.json";
  private jsonClase="http://localhost/Proyecto/clase.php";
  
  getClases():Observable<ClasesProfe[]>{
    return this.http.get<ClasesProfe[]>(this.jsonClases);
  }

  getClase(kiCodigo):Observable<ClasesProfe>{
    return this.http.get<ClasesProfe>(this.jsonClase+"?kiCodigo="+kiCodigo);
  }
}
