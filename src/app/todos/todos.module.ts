import { NgModule } from "@angular/core";
import { TodosService } from "./Todos.Service";
import { TodosComponent } from "./todos.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodosdetailsComponent } from "src/app/todosdetails/todosdetails.component";
import { NgxPaginationModule } from "ngx-pagination";
 
 

const router:Routes=[
    {path:':id',component:TodosdetailsComponent},
    {path:'',component:TodosComponent},
    
]


@NgModule({
    declarations:[TodosComponent,TodosdetailsComponent],  

    imports:[CommonModule,RouterModule.forChild(router,),FormsModule,NgxPaginationModule,ReactiveFormsModule],

    providers:[TodosService],

    bootstrap:[ ]
})


export class TodosModule{}


