import { Component, OnInit } from '@angular/core';
import { Competicion } from '../clases/competicion';

import { GestionarCompeticionesService } from '../servicios/gestionar-competiciones.service';
//import filtro

@Component({
  selector: 'app-competiciones',
  templateUrl: './competiciones.component.html',
  styleUrls: ['./competiciones.component.css']
})
export class CompeticionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getCompeticiones(){
    
  }

}
