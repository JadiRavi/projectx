import { NgModule } from "@angular/core";
import { RegistrationComponent } from "./registration.component";
import { RegistartationService } from "./registration.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RegistrationdetailsComponent } from "../registrationdetails/registrationdetails.component";


const router:Routes=[
  {path:'registration/:id',component:RegistrationdetailsComponent}, 
  {path:'registration',component:RegistrationComponent}, 
 
]

@NgModule({
    declarations:[RegistrationComponent,RegistrationdetailsComponent],
    imports: [CommonModule, FormsModule,RouterModule.forChild(router),ReactiveFormsModule],
    providers:[RegistartationService],
    bootstrap:[],

})


export class RegistrationModule{

}