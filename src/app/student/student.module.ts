import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentComponent } from "./student.component";
import { CommonModule } from "@angular/common";
import { StudentService } from "./student.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentailsComponent } from "../studentails/studentails.component";


const router:Routes=[
{path:':id',component:StudentailsComponent, },
{path:'',component:StudentComponent},
]

@NgModule({
    declarations:[StudentComponent,StudentailsComponent],
    imports:[CommonModule, RouterModule.forChild(router),ReactiveFormsModule,FormsModule],
    providers:[ StudentService,],

})


export class StudentModule{}