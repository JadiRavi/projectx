import { NgModule } from "@angular/core";
import { PostComponent } from "./post.component";
import { PostdetailComponent } from "../postdetail/postdetail.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";

const router:Routes=[
 {path:':id',component:PostdetailComponent},
{path:'',component:PostComponent},


]

@NgModule({
declarations:[PostComponent,PostdetailComponent],
imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(router), NgxPaginationModule,],
providers:[]

})



export class PostModule{}