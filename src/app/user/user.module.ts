import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { UserService } from "./user.service";
import { UserComponent } from "./user.component";
import { NgxPaginationModule } from "ngx-pagination";
import { UserdetailsComponent } from "../userdetails/userdetails.component";



const router :Routes=[

    {path:'user/:id',component: UserdetailsComponent}, 
    {path:'user',component:UserComponent}, 
]

@NgModule({

    declarations:[UserdetailsComponent,UserComponent],
    imports:[CommonModule,RouterModule.forChild(router),ReactiveFormsModule,FormsModule,NgxPaginationModule],
    providers:[UserService],

})


export class UserModule{}