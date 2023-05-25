import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post/post.model';
import { PostService } from '../post/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
 


  export class PostdetailComponent implements OnInit {
    pObj = new PostModel();
    Login:number;
    constructor(private pService:PostService, private router: ActivatedRoute) {

    }
  ngOnInit(): void {
     let id = this.router.snapshot.paramMap.get('id');
     this.Login = id ? + id : 0;

      this.pService.getById(this.Login).subscribe(
        (response)=>{
          this.pObj=response as PostModel;
        }
      );
  }  
}


