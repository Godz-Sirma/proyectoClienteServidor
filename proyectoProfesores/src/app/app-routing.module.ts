import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesoresComponent } from '../profesores/profesores.component';
import { DetallesProfeComponent } from '../detalles-profe/detalles-profe.component';
import { ClasesProfeComponent } from '../clases-profe/clases-profe.component';
import { DetallesClaseComponent } from '../detalles-clase/detalles-clase.component';


const routes: Routes = [
  {path:"listaProfes",component: ProfesoresComponent},
  {path:"detallesProfe/:kiTitulo",component: DetallesProfeComponent},
  {path:"listaClases",component: ClasesProfeComponent},
  {path:"detallesClase/:kiCodigo",component: DetallesClaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
