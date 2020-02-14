import { Component, OnInit } from '@angular/core';
import { SetRoleService } from '../../servicios/set-role.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  public role:string;
  public registrado:Boolean;
  constructor(private setRole:SetRoleService) { }
  
  ngOnInit() {
    this.getRole();
    this.getRegistrado();
  }

  getRole(){
    this.setRole.getRole().subscribe(dato=>this.role=dato);
  }
  getRegistrado(){
    this.setRole.getRegistrado().subscribe(user=>this.registrado=user);
  }

}
