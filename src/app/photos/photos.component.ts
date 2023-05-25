import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { PhotosMedel } from './photos.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
 constructor(private pService:PhotosService, private toster:ToastrService){  
 }
  ngOnInit(): void {
this.loadData();

  }
  loadData(){
    this.pService.reade().subscribe(
      (response)=>{
        this.photos=response as PhotosMedel[];
      }
    );

  }
  modelHeader:string='';
 
 photoObj= new PhotosMedel();
 photos:PhotosMedel[]=[];

 addPhotos(){
  this.modelHeader='ADD PHOTOS';
   this.photoObj=new PhotosMedel();
 
}
editePhotos(photo:PhotosMedel){
  this.modelHeader='EDITE PHOTOS';  
  this.photoObj=photo;
   
}
deletPhotos(id:number){
  this.pService.delete(id).subscribe(
    (response)=>{
      alert('ARE SURE DELET :'+ id+'is deleted');
      let _itemIndex    =this.photos.findIndex(x=>x.id==id);
      this.photos.splice(_itemIndex,1)
    }
  );
}
savePhotos(){
  if  ( this.modelHeader=='ADD PHOTOS'){
    this.pService.create(this.photoObj).subscribe(
      (response)=>{
      // this.alertMessage='addd successfully....!';
      this.toster.success('addd successfully....!');
        this.photos.splice(0, 0,  response as  PhotosMedel );
      }

    );
  }
  else{
    this. pService.update(this.photoObj.id,this.photoObj).subscribe(
      (response)=>{
        //this.alertMessage='update successfully.....!';
        this.toster.success('update successfully.....!')
        let _itemIndex= this.photos.findIndex(x=>x.id ==this.photoObj.id);
        this.photos[_itemIndex]=response as  PhotosMedel;
      }
    );
  }
  this.photoObj=new PhotosMedel();
  }
}