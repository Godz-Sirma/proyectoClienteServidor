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
import { MerchandisingComponent } from '../../merchandising/merchandising.component';
import { CompeticionesComponent } from '../../competiciones/competiciones.component';
import { AyudaComponent } from '../../ayuda/ayuda.component';

@NgModule({
  declarations: [
    ProfesoresComponent,
    ClasesProfeComponent,
    DetallesProfeComponent,
    DetallesClaseComponent,
    MerchandisingComponent,
    CompeticionesComponent,
    AyudaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GestionarProfesoresService
  ]
})
export class PrincipalModule { }
