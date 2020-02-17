import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesoresComponent } from '../profesores/profesores.component';
import { DetallesProfeComponent } from '../detalles-profe/detalles-profe.component';
import { ClasesProfeComponent } from '../clases-profe/clases-profe.component';
import { DetallesClaseComponent } from '../detalles-clase/detalles-clase.component';

import { MerchandisingComponent } from '../merchandising/merchandising.component';
import { CompeticionesComponent } from '../competiciones/competiciones.component';
import { AyudaComponent } from '../ayuda/ayuda.component';


const routes: Routes = [
  {path:"listaProfes",component: ProfesoresComponent},
  {path:"detallesProfe/:kiTitulo",component: DetallesProfeComponent},
  {path:"listaClases",component: ClasesProfeComponent},
  {path:"detallesClase/:kiCodigo",component: DetallesClaseComponent},
  
  {path:"merchandising",component: MerchandisingComponent},
  {path:"competiciones",component: CompeticionesComponent},
  {path:"ayuda",component: AyudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
