// -- Utils --
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// -- Componentes --
import { PrincipalModule } from '../modulos/principal/principal.module';

// -- Componentes --
import { AppRoutingModule } from './app-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { IndividualComponent } from './individual/individual.component';

// -- Servicios --
import { SetRoleService } from '../servicios/set-role.service';
import { GestionarSidemenuService } from '../servicios/gestionar-sidemenu.service';
import { ProfesoresComponent } from '../profesores/profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    SidemenuComponent,
    FooterComponent,
    IndividualComponent,
    ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PrincipalModule,
    AppRoutingModule
  ],
  providers: [
    SetRoleService,
    GestionarSidemenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
