import { Component, OnInit } from '@angular/core';
import { Registro } from '../../clases/registro';
import { GestionarRegistrarseServiceService } from '../../servicios/gestionar-registrarse.service';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  registro:Registro;

  constructor(private gestionRegistrarse:GestionarRegistrarseServiceService) { }

  ngOnInit(): void {
  }

  enviar():void{
    this.gestionRegistrarse.registrarUsuario(this.registro);
  }

}

