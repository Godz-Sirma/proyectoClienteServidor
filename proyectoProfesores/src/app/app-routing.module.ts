import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -- Principal --
import { LandingPageComponent } from '../app/landing-page/landing-page.component';

// -- Compuestos/Con Detalles -- 
import { ProfesoresComponent } from '../profesores/profesores.component';
import { DetallesProfeComponent } from '../detalles-profe/detalles-profe.component';
import { ClasesProfeComponent } from '../clases-profe/clases-profe.component';
import { DetallesClaseComponent } from '../detalles-clase/detalles-clase.component';

// -- Simples/Sin Detalles --
import { CompeticionesComponent } from '../competiciones/competiciones.component';
import { AyudaComponent } from '../ayuda/ayuda.component';
import { ActividadesComponent } from '../actividades/actividades.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComprarComponent } from '../comprar/comprar.component';


const routes: Routes = [
  {path:"listaProfes",component: ProfesoresComponent},
  {path:"detallesProfe/:kiTitulo",component: DetallesProfeComponent},
  {path:"listaClases",component: ClasesProfeComponent},
  {path:"detallesClase/:kiCodigo",component: DetallesClaseComponent},
  
  {path:"listaCompeticiones",component: CompeticionesComponent},
  {path:"listaActividades",component: ActividadesComponent},
  {path:"comprar/:kiTitulo/:ksNombre",component: ComprarComponent},
  {path:"carrito",component: CarritoComponent},
  {path:"help",component: AyudaComponent},
  
  {path:"landingPage",component: LandingPageComponent},
  {path:"",redirectTo:"/landingPage" ,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
