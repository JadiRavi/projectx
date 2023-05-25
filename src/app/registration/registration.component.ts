import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from './registration.model';
import { RegistartationService } from './registration.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  register:RegistrationModel[]=[];
  reg=new RegistrationModel();
  constructor(private rService:RegistartationService){}
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.register=this.rService.read();
  }

}
