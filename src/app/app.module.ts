import { Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import{AngularFireModule}from '@angular/fire/compat';
import{AngularFirestoreModule}from '@angular/fire/compat/firestore';
import{AngularFireDatabaseModule}from '@angular/fire/compat/database';
import { HttpClientModule } from '@angular/common/http';
 
 
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { StudentModule } from './student/student.module';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module'; 
import { ComentsModule } from './coments/coments.madule';
import { UserModule } from './user/user.module';
import { TodosModule } from './todos/todos.module';
import { PostModule } from './post/postmodule'; 
import { PhotosModule } from './photos/photosmodule';
import { Login1Component } from './login1/login1.component';
import { AuthService } from './authresponsemodel/authservice';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './items/items.service';
import { ItemsdetailsComponent } from './itemsdetails/itemsdetails.component';
import { environment } from 'src/environments/environment.development';
import { EmployeComponent } from './employe/employe.component';
import { EmployedetailsComponent } from './employedetails/employedetails.component';
 
 

 
 
 
 const routers:Routes=[
   {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'items',component:ItemsComponent},
  {path:'employe/:id',component:EmployedetailsComponent},
  {path:'employe',component:EmployeComponent}, 
  {path:'login1',component:Login1Component},
  {path:'post', loadChildren:()=> PostModule}, 
  {path:'login', loadChildren:()=> LoginModule}, 
  {path:'todos', loadChildren:()=> TodosModule},
  {path:'student', loadChildren:()=>StudentModule},
  
  {path:'**',component:NotFoundComponent},
 

  ];
@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    NotFoundComponent,    
    Login1Component, 
    UnAuthorizedComponent,  
    ItemsComponent, 
    ItemsdetailsComponent,
     EmployeComponent,
     EmployeComponent,
     EmployedetailsComponent
    
     
         
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:'tostar-top-bottom'}),
    RouterModule.forRoot(routers),   
    ComentsModule,
    UserModule ,      
    PhotosModule,
   RegistrationModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireDatabaseModule,
   AngularFirestoreModule
   
  ],

  providers: [AuthService,ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
