import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:LoginModel[]=[];
  obj= new LoginModel();
  
  constructor(private logins:LoginService){}
  ngOnInit(): void {
    this.loadData();
  }
  
   
  loadData(){
    this.login=this.logins.read();
  }
}
