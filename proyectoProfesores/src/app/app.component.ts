import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showAdmin=false;
  public showProfe=false;
  public showAlumno=false;
  public registrado=false;

  title = 'proyectoProfesores';
}
