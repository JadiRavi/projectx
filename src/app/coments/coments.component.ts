import { Component, OnInit } from '@angular/core';
import { ComentsService } from './coments.service';
import { ComentsModel } from './coments.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {
constructor(private cService:ComentsService,private toster:ToastrService){
}
modelHeader:string=''; 
alertMessage:string='';
cObj=new ComentsModel();
cModel:ComentsModel[]=[];
presentPage:number=1;

  ngOnInit(): void {
   this.   loadData();
  }
  loadData(){
 this.cService.read().subscribe(
  (response)=>{
    this.cModel= response as ComentsModel[];
  },
  (error:Response)=>{
    if(error.status==404){
      this.toster.error('coment not found');            
    }
    else if(error.status==400){
      this.toster.error('Bad request....!'); 
    }
    else if(error.status==401){
      this.toster.error('Bad request.....!')
    }
    else if(error.status==401){
      this.toster.error('un authorized......!');   
    }
    else if (error.status==500){
      
      this.toster.error('internal server error.......!')
    }
    else{
      this.toster.error('Un Handeled exption Occured....!')

    }
  }      

 
 );

  }
  addComent(){
    this.modelHeader='ADD COMENT';
    this.cObj=new ComentsModel();
    this.alertMessage='';

  }
  editComent(coment:ComentsModel){
    this.modelHeader='EDIT COMENT';
    this.cObj = coment;
    this.alertMessage='';
     
  }
  deleteComent(id:number){
    this.cService.delete(id).subscribe(
      (response)=>{
        alert('ARE SURE DELET :'+ id+'is deleted');
        let _itemIndex= this.cModel.findIndex(x=>x.id==id);
        this.cModel.splice(_itemIndex,1);
      },
      (error:Response)=>{
        if(error.status==404){
          this.toster.error('coment not found');            
        }
        else if(error.status==400){
          this.toster.error('Bad request....!'); 
        }
        else if(error.status==401){
          this.toster.error('Bad request.....!')
        }
        else if(error.status==401){
          this.toster.error('un authorized......!');   
        }
        else if (error.status==500){
          
          this.toster.error('internal server error.......!')
        }
        else{
          this.toster.error('Un Handeled exption Occured....!')

        }
      }      

      
    );
  }
  saveComent(){
    if  ( this.modelHeader=='ADD COMENT'){
      this.cService.create(this.cObj).subscribe(
        (response)=>{
        // this.alertMessage='addd successfully....!';
        this.toster.success('addd successfully....!');
          this.cModel.splice(0, 0,  response as ComentsModel );
        },
        (error:Response)=>{
          if(error.status==404){
            this.toster.error('coment not found');            
          }
          else if(error.status==400){
            this.toster.error('Bad request....!'); 
          }
          else if(error.status==401){
            this.toster.error('Bad request.....!')
          }
          else if(error.status==401){
            this.toster.error('un authorized......!');   
          }
          else if (error.status==500){
            
            this.toster.error('internal server error.......!')
          }
          else{
            this.toster.error('Un Handeled exption Occured....!')

          }
        }      

    

      );
    }
    else{
      this.cService.update(this.cObj.id,this.cObj).subscribe(
        (response)=>{
          //this.alertMessage='update successfully.....!';
          this.toster.success('update successfully.....!')
          let _itemIndex= this.cModel.findIndex(x=>x.id ==this.cObj.id);
          this.cModel[_itemIndex]=response as ComentsModel;
        },
        (error:Response)=>{
          if(error.status==404){
            this.toster.error('coment not found');           
          }
          else if(error.status==400){
            this.toster.error('Bad request....!');
          }
          else if(error.status==401){
            this.toster.error('Bad request.....!')
          }
          else if(error.status==401){
            this.toster.error('un authorized......!');   
          }
          else if (error.status==500){
            
            this.toster.error('internal server error.......!')
          }
          else{
            this.toster.error('Un Handeled exption Occured....!')

          }
        }
      );
    }
    this.cObj=new ComentsModel();
    }
    
}