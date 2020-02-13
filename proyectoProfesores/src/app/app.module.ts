import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { IndividualComponent } from './individual/individual.component';

import { SetRoleService } from '../servicios/set-role.service';
import { GestionarSidemenuService } from '../servicios/gestionar-sidemenu.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    SidemenuComponent,
    FooterComponent,
    IndividualComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SetRoleService,
    GestionarSidemenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
