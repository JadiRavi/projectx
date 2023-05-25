import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../authresponsemodel/authservice';
import { AuthResponseModel } from '../authresponsemodel/authresponsemodel';

@Component({
  selector: 'login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component {

  userName:string;
  password:string;

  loginform=new FormGroup({
    userName:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    
  });
  constructor(private authService :AuthService,private toster:ToastrService,private router:Router){}
  log(){
    let response= this.authService.authentiCate(this.userName,this.password)
    if(response.status===200){
let resModel=response.body as AuthResponseModel;

localStorage.setItem('userName',resModel.userName);
localStorage.setItem('role',resModel.role);
localStorage.setItem('token',resModel.token);

this.toster.success(response.statusText)
this.router.navigate(['/home']);


    }
    else{
    this.toster.error(response.statusText);
  }
  }
}
