// -- Utils --
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// -- Modulos --
import { PrincipalModule } from '../modulos/principal/principal.module';

// -- Componentes --
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComponent } from './carrito/carrito.component';
import { IndividualComponent } from './individual/individual.component';

import { LandingPageComponent } from './landing-page/landing-page.component';

// -- Servicios --
import { SetRoleService } from '../servicios/set-role.service';
import { GestionarSidemenuService } from '../servicios/gestionar-sidemenu.service';
import { GestionarCarritoService } from '../servicios/gestionar-carrito.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    SidemenuComponent,
    FooterComponent,
    IndividualComponent,
    LandingPageComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PrincipalModule,
    AppRoutingModule
  ],
  providers: [
    SetRoleService,
    GestionarSidemenuService,
    GestionarCarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
