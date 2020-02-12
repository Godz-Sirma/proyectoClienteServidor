import { Component, OnInit } from '@angular/core';
import { SetRoleService } from '../../servicios/set-role.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  public role:String="invitado";
  public registrado:Boolean=false;
  constructor(private setRole:SetRoleService) { }
  
  ngOnInit() {
    this.getRole();
    this.getRegistrado();
  }

  getRole(){
    this.setRole.getRole().subscribe(dato=>this.role=dato);
  }
  getRegistrado(){
    this.setRole.getRegistrado().subscribe(dato=>this.registrado=dato);
  }

}
