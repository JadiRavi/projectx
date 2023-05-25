import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from "./login.service";
import { NgxPaginationModule } from "ngx-pagination"; 
import { LoginDetailsComponent } from "../login-details/login-details.component";

const router:Routes=[  
    {path:'log/:id',component: LoginDetailsComponent},     
    {path:'log',component:LoginComponent}  
]; 

@NgModule({
    declarations:[LoginComponent,LoginDetailsComponent],
    imports:[CommonModule,RouterModule.forChild(router),ReactiveFormsModule,NgxPaginationModule],
    providers:[LoginService],
})

export class LoginModule{}