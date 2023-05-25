import { Component, OnInit } from '@angular/core';
import { PhotosMedel } from '../photos/photos.model';
import { PostService } from '../post/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'photosdetails',
  templateUrl: './photosdetails.component.html',
  styleUrls: ['./photosdetails.component.css']
})
export class PhotosdetailsComponent implements OnInit {

  
 
  photoObj = new PhotosMedel();
  photos:number;
  constructor(private lservice: PostService, private router: ActivatedRoute) {

  }
ngOnInit(): void {
   let id = this.router.snapshot.paramMap.get('id');
    this.photos= id ? + id : 0;
   
   this.lservice.getById(this.photos).subscribe(
    (respons)=>{
      this.photoObj=respons as PhotosMedel;
    }
   );
}  
}


