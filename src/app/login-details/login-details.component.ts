import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../login/login.model';
import { LoginService } from '../login/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {
    login = new LoginModel();
    constructor(private lservice: LoginService, private router: ActivatedRoute) {

    }
  ngOnInit(): void {
     let id = this.router.snapshot.paramMap.get('id');
     let Login = id ? + id : 0;
     this.login = this.lservice.getById(Login);
  }  
}
