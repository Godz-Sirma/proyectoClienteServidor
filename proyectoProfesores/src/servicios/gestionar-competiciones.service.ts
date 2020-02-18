import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Competicion } from '../clases/competicion';


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
