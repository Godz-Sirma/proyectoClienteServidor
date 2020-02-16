// -- Utils --
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- Componentes --
import { ProfesoresComponent } from '../../profesores/profesores.component';

// -- Servicios --
import { GestionarProfesoresService } from '../../servicios/gestionar-profesores.service';
import { ClasesProfeComponent } from '../../clases-profe/clases-profe.component';
import { DetallesProfeComponent } from '../../detalles-profe/detalles-profe.component';
import { DetallesClaseComponent } from '../../detalles-clase/detalles-clase.component';

@NgModule({
  declarations: [
    ProfesoresComponent,
    ClasesProfeComponent,
    DetallesProfeComponent,
    DetallesClaseComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GestionarProfesoresService
  ]
})
export class PrincipalModule { }
