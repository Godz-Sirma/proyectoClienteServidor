// -- Utils --
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- Servicios --
import { GestionarProfesoresService } from '../../servicios/gestionar-profesores.service';
import { GestionarCompeticionesService } from '../../servicios/gestionar-competiciones.service';
import { GestionarClasesProfeService } from '../../servicios/gestionar-clases-profe.service';
import { GestionarActividadesService } from '../../servicios/gestionar-actividades.service';
import { GestionarFiltroService } from '../../servicios/gestionar-filtro.service';
import { GestionarCarritoService } from '../../servicios/gestionar-carrito.service';

// -- Componentes --
import { ProfesoresComponent } from '../../profesores/profesores.component';
import { ClasesProfeComponent } from '../../clases-profe/clases-profe.component';
import { DetallesProfeComponent } from '../../detalles-profe/detalles-profe.component';
import { DetallesClaseComponent } from '../../detalles-clase/detalles-clase.component';
import { CompeticionesComponent } from '../../competiciones/competiciones.component';
import { AyudaComponent } from '../../ayuda/ayuda.component';
import { PaginaCompraComponent } from '../../pagina-compra/pagina-compra.component';
import { ComprarComponent } from '../../comprar/comprar.component';
import { ActividadesComponent } from '../../actividades/actividades.component';

@NgModule({
  declarations: [
    ProfesoresComponent,
    ClasesProfeComponent,
    DetallesProfeComponent,
    DetallesClaseComponent,
    CompeticionesComponent,
    AyudaComponent,
    PaginaCompraComponent,
    ComprarComponent,
    ActividadesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GestionarProfesoresService,
    GestionarClasesProfeService,
    GestionarCompeticionesService,
    GestionarActividadesService,
    GestionarFiltroService,
    GestionarCarritoService
  ]
})
export class PrincipalModule { }
