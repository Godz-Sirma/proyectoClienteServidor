import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Competicion } from '../clases/competicion';


@Injectable({
  providedIn: 'root'
})
export class GestionarCompeticionesService {

  constructor() { }
}
