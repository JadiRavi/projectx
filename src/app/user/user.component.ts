import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserModel } from './user.model';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit{
  UserForm=new FormGroup({
    id:new FormControl(null),
    name:new FormControl(null),
    email:new FormControl(null),
    street:new FormControl(null),
    suite:new FormControl(null),
    city:new FormControl(null),
    zipcode:new FormControl(null),
    lat:new FormControl(null),
    lng:new FormControl(null),
    phone:new FormControl(null),
    website:new FormControl(null),
   // name:new FormControl(null),
    catchPhrase:new FormControl(null),
    bs:new FormControl(null),


  })

  constructor(private uService:UserService,private toaster: ToastrService){
     }
     curruntPage:number=1;
     users:UserModel[]=[];
     user=new UserModel();
     modelHeader='';  
      
  
    addUser(){      
      this.modelHeader='ADD USER';
      this. user=new UserModel();
       
      
    }
    editUser(user:UserModel){
      this.modelHeader='EDIT USER';       
      this.user=user;
      
    }

  
    deleteUser(id:number){
      
      this.uService.delete(id).subscribe(
        
        (response)=>{
          alert ('Are sure delete with:'+ id + 'is deleted');
          let _itemIndex=this.users.findIndex(x=>x.id==id);
          this. users.splice(_itemIndex,1);
        },
        (error:Response)=>{
          if(error.status==404){
            this.toaster.error('coment not found');            
          }
          else if(error.status==400){
            this.toaster.error('Bad request....!'); 
          }
          else if(error.status==401){
            this.toaster.error('Bad request.....!')
          }
          else if(error.status==401){
            this.toaster.error('un authorized......!');   
          }
          else if (error.status==500){
            
            this.toaster.error('internal server error.......!')
          }
          else{
            this.toaster.error('Un Handeled exption Occured....!')
  
          }
        }      
        );       
        } 
        loadData(){
          this.uService.read().subscribe(
            (response)=>{
            this.users= response as UserModel[];
              } ,
              (error:Response)=>{
                if(error.status==404){
                  this.toaster.error('coment not found');            
                }
                else if(error.status==400){
                  this.toaster.error('Bad request....!'); 
                }
                else if(error.status==401){
                  this.toaster.error('Bad request.....!')
                }
                else if(error.status==401){
                  this.toaster.error('un authorized......!');   
                }
                else if (error.status==500){
                  
                  this.toaster.error('internal server error.......!')
                }
                else{
                  this.toaster.error('Un Handeled exption Occured....!')
        
                }
              }           
          );
          }
          ngOnInit(): void {
            this.loadData();
         }
         saveUser() {
          if(this.modelHeader =='ADD USER') {
            this.uService.create(this.user).subscribe(
              (response) => {
                this.toaster.success('Add successfully..');
              //  this.alertMessage='add suceessfully...!';
                this.users.splice(0, 0, response as UserModel);
              },
              (error:Response)=>{
                if(error.status==404){
                  this.toaster.error('coment not found');            
                }
                else if(error.status==400){
                  this.toaster.error('Bad request....!'); 
                }
                else if(error.status==401){
                  this.toaster.error('Bad request.....!')
                }
                else if(error.status==401){
                  this.toaster.error('un authorized......!');   
                }
                else if (error.status==500){
                  
                  this.toaster.error('internal server error.......!')
                }
                else{
                  this.toaster.error('Un Handeled exption Occured....!')
        
                }
              }      
            );
          }
          else{
            this.uService.update(this.user.id,this.user).subscribe(
              (response)=>{
               // this.alertMessage=('update successfully.....!');
               this.toaster.success('update successfully.....!');
               let _itemIndex  =  this.users.findIndex(x =>x.id == this.user.id)
                this.users[_itemIndex]=response as UserModel;
              },
              (error:Response)=>{
                if(error.status==404){
                  this.toaster.error('coment not found');            
                }
                else if(error.status==400){
                  this.toaster.error('Bad request....!'); 
                }
                else if(error.status==401){
                  this.toaster.error('Bad request.....!')
                }
                else if(error.status==401){
                  this.toaster.error('un authorized......!');   
                }
                else if (error.status==500){
                  
                  this.toaster.error('internal server error.......!')
                }
                else{
                  this.toaster.error('Un Handeled exption Occured....!')
        
                }
              }      
        
             );
    
          }
          this.user=new UserModel();
    
        }
        
       }



