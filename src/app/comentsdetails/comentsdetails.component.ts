import { Component, OnInit } from '@angular/core';
import { ComentsModel } from '../coments/coments.model';
import { ActivatedRoute } from '@angular/router';
import { ComentsService } from '../coments/coments.service';

@Component({
  selector: 'comentsdetails',
  templateUrl: './comentsdetails.component.html',
  styleUrls: ['./comentsdetails.component.css']
})
export class ComentsdetailsComponent implements OnInit {
  
  coments=new ComentsModel();
  userId:number;
  constructor(private activeRoute:ActivatedRoute, private cService:ComentsService){}

  ngOnInit(): void {

  let id= this.activeRoute.snapshot.paramMap.get('id');

  this.userId=id?+id:0;

 this.cService.getById(this.userId).subscribe(
  (response)=>{
    this.coments=response as ComentsModel;
  }
 );

  }
 
}
