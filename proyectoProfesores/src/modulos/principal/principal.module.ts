// -- Utils --
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- Componentes --
import { ProfesoresComponent } from '../../profesores/profesores.component';

// -- Servicios --
import { GestionarProfesoresService } from '../../servicios/gestionar-profesores.service';

@NgModule({
  declarations: [
    ProfesoresComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GestionarProfesoresService
  ]
})
export class PrincipalModule { }
