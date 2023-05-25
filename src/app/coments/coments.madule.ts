import { NgModule } from "@angular/core";
import { ComentsService } from "./coments.service";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ComentsComponent } from "./coments.component";
import {  RouterModule, Routes } from "@angular/router";
import { ComentsdetailsComponent } from "../comentsdetails/comentsdetails.component";
import { NgxPaginationModule } from "ngx-pagination";

 const router :Routes=[
    {path:'coments/:id',component:ComentsdetailsComponent},
    {path:'coments',component:ComentsComponent},
 ]
 
@NgModule({
declarations:[ComentsComponent,ComentsdetailsComponent],

imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(router), NgxPaginationModule,],

providers:[ComentsService,],

bootstrap:[],

    
})
export class ComentsModule{}
 
