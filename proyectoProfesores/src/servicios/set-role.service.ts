import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs'; 
import { Usuarios } from '../clases/usuarios';

@Injectable({
  providedIn: 'root'
})
export class SetRoleService {
  
  listaUsers=[];
  constructor(private http:HttpClient) { }

  private urlRole="http://localhost/Cliente/role.php";
  private urlRegistrado="http://localhost/Cliente/usuarios.php";

  getRole():Observable<String>{
    return this.http.get<String>(this.urlRole);
  }
  getRegistrado():Observable<Boolean>{
    return this.http.get<Boolean>(this.urlRegistrado);
  }
}
