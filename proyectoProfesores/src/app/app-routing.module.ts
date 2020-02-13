import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesoresComponent } from '../profesores/profesores.component';

const routes: Routes = [
  {path:"listaProfes",component: ProfesoresComponent},
  {path:"detallesProfe/:kiTitulo",component: ProfesoresComponent},
  {path:"",component: ProfesoresComponent},
  {path:"",component: ProfesoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
