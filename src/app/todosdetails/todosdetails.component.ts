import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos/Todos.Service';
import { TodosModel } from '../todos/todos.medel';

@Component({
  selector: 'todosdetails',
  templateUrl: './todosdetails.component.html',
  styleUrls: ['./todosdetails.component.css']
})
export class TodosdetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private todosService:TodosService){}
  userId:number=1;

   todos= new TodosModel();
  
  ngOnInit(): void {
    let id=  this.activatedRoute.snapshot.paramMap.get('id'); 
    this.userId=id?+id:0;

    this.todosService.getById(this.userId).subscribe(
      (response)=>{
        this.todos=response as TodosModel;
      }
    );
    
    }
   
  }


