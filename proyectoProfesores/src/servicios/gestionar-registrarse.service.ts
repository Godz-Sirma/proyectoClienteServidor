import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Registro } from '../clases/registro'; // TODO

@Injectable({
  providedIn: 'root'
})
export class GestionarRegistrarseServiceService {

  private url='assets/query/registro.php';
  
  constructor(private http: HttpClient, private router: Router) {  }


  registrarUsuario(registro:Registro) {
    return this.http.post<Registro>(this.url, registro);
  }
}