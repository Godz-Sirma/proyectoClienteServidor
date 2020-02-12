import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { IndividualComponent } from './individual/individual.component';

import { SetRoleService } from '../servicios/set-role.service';

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
    AppRoutingModule
  ],
  providers: [
    SetRoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
