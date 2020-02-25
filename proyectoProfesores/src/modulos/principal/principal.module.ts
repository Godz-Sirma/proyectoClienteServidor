// -- Utils --
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { CompeticionesComponent, NgbdSortableHeader } from '../../competiciones/competiciones.component';
import { AyudaComponent } from '../../ayuda/ayuda.component';
import { PaginaCompraComponent } from '../../pagina-compra/pagina-compra.component';
import { ComprarComponent } from '../../comprar/comprar.component';
import { ActividadesComponent } from '../../actividades/actividades.component';

@NgModule({
  declarations: [
    NgbdSortableHeader,
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
    CommonModule,
    NgbModule
  ],
  providers: [
    GestionarProfesoresService,
    GestionarClasesProfeService,
    GestionarCompeticionesService,
    GestionarActividadesService,
    GestionarFiltroService,
    GestionarCarritoService
  ],
  bootstrap: [PrincipalModule]
})
export class PrincipalModule { }
