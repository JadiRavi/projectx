import { Component } from '@angular/core';
import { UserModel } from '../user/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {



  coments=new UserModel();
  userId:number=1;
  constructor(private activeRoute:ActivatedRoute, private cService:UserService){}

  ngOnInit(): void {

  let id= this.activeRoute.snapshot.paramMap.get('id');

  this.userId=id?+id:0;

 this.cService.getById(this.userId).subscribe(
  (response)=>{
    this.coments=response as UserModel;
  }
 );

  }
 
}


