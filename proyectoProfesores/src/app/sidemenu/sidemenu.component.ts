import { Component, OnInit } from '@angular/core';
import { Sidemenu } from '../../clases/sidemenu';
import { GestionarSidemenuService } from '../../servicios/gestionar-sidemenu.service';



@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  listaSidemenu:Sidemenu[]=[];
  constructor(private gestionarSidemenu:GestionarSidemenuService) { }

  ngOnInit() {
    this.mostrarMenu();
  }

  mostrarMenu(){
    this.gestionarSidemenu.getlista().subscribe(datos=>this.listaSidemenu=datos);
  }

}
