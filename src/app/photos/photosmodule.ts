import { NgModule } from "@angular/core";
import { PhotosComponent } from "./photos.component";
import { PhotosdetailsComponent } from "../photosdetails/photosdetails.component";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PhotosService } from "./photos.service";

const router:Routes=[
    {path:'photos/:id',component:PhotosdetailsComponent},
    {path:'photos',component:PhotosComponent},
]   

@NgModule({
    declarations:[PhotosComponent,PhotosdetailsComponent],
    imports:[CommonModule,NgxPaginationModule,RouterModule.forChild(router),FormsModule,ReactiveFormsModule],
    providers:[PhotosService],

})



export class PhotosModule{}