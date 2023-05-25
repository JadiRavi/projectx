import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { PostModel } from './post.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  modelHeader:string='';
 
  pObj=new PostModel();
  pModel:PostModel[]=[];
  constructor(private pService: PostService, private toster:ToastrService){
    
  }
 
  addPost(){
    this.modelHeader='ADD POST'; 
    this.pObj=new PostModel();    
  }
  editPost(post:PostModel){
    this.modelHeader='EDITE POST';    
    this.pObj=post;  
  }


  deletePost(id:number){
  this.pService.delete(id).subscribe( 
  (response)=>{
    alert('Are You Sure deleted:'+ id+'is deleted')
    let _itemIndex=this.pModel.findIndex(x=>x.id==id);
    this.pModel.splice( _itemIndex,1);
  },
  (error:Response)=>{
    if(error.status==404){
this.toster.error('post not found');
    }
    else if(error.status==400){
      this.toster.error('Bad requst.....!');
    }
    else if (error.status==401){
    this.toster.error('un authorized......!');
    }
    else if (error.status==500){
      this.toster.error('internal server error.......!');
    }
    else {
      this.toster.error('Un Handeled exption Occured....!')
    }
  }
);
  }
  savePost(){
    if( this.modelHeader=='ADD POST'){

    this.pService.create(this.pObj).subscribe(
      (response)=>{
         //this.alertMessage='add successfully...!';
        
         this.pModel.splice(0, 0, response as PostModel);
         this.toster.success('add successfully...!');
      },
    (error:Response)=>{
      if(error.status==404){
       this.toster.error('post not found');    
      }
      else if (error.status==400){
        this.toster.error('Bad requst.....!')
      }
    
      else if (error.status==401){
        this.toster.error('Un autheraized.......!');
      }
      else if (error.status==500){
        this.toster.error('internal server error.......!');
      }
      else{
        this.toster.error('Un Handeled exption Occured....!')
      }
    }
    );
  }
    else{
      this.pService.update(this.pObj.id,this.pObj).subscribe(
        (response)=>{
         // this.alertMessage='update successfully.....!';
        
      let _itemIndex=this.pModel.findIndex(x=>x.id==this.pObj.id);
      this.pModel[_itemIndex]=response as PostModel;
      this.toster.success('upadate successfully...!');
        },
        (error:Response)=>{
            if(error.status==404){
              this.toster.error('post not found');
            }
            else if(error.status==400){
              this.toster.error('Bad request.....!');
            }      
            
            else if(error.status==401){
              this.toster.error('un authorized......!');              
            }
            else if(error.status==500){
              this.toster.error('internal server error.......!')
            }
            else{
              this.toster.error('Un Handeled exption Occured....!');
            }
        }
      );
    }
    this.pObj=new PostModel();
  }
  ngOnInit(): void {
    this.loadData();
    }
    loadData(){
  this.pService.read().subscribe(
    (rseponse)=>{
      this.pModel= rseponse as PostModel[];
    },
    (error:Response)=>{
      if( error.status==404){
        this.toster.error('pst not found......!');
      }
      else if(error.status==400){
        this.toster.error('Bad request.....!');
      }
      else if( error.status==401){
        this.toster.error('un authorized......!')
      }
      else if(error.status==500){
        this.toster.error('internal server error.......!')
      }
      else{
        this.toster.error('Un Handeled exption Occured....!')
      }
    }
  );
    }

}
