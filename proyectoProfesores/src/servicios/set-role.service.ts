import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetRoleService {
  
  listaUsers=[];
  constructor(private http:HttpClient) { }

  private urlRole="http://localhost/Proyecto/role.json";
  private urlRegistrado="http://localhost/Proyecto/registrado.php";

  getRole():Observable<string>{
    return this.http.get<string>(this.urlRole);
  }
  getRegistrado():Observable<Boolean>{
    return this.http.get<Boolean>(this.urlRegistrado);
  }
}
