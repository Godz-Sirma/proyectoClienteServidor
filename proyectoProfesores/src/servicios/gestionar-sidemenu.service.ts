import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Sidemenu } from '../clases/sidemenu';
import { Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionarSidemenuService {

  constructor(private http:HttpClient) { }

  private jsonSidemenu="http://localhost/Proyecto/sidemenu.json";

  getRole():Observable<Sidemenu[]>{
    return this.http.get<Sidemenu[]>(this.jsonSidemenu);
  }
}
