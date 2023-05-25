import { Component, OnInit } from '@angular/core';
import { TodosService } from './Todos.Service';
import { TodosModel } from './todos.medel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
constructor(private tService:TodosService,private toster:ToastrService){
}
curruntPage:number=1;
modelHeader:string='';
 
todos:TodosModel[]=[];
todosObj = new TodosModel();
  ngOnInit(): void {
    this.loadData(); 
  }
  loadData(){
    this.tService.read().subscribe(
      (response)=>{
        this.todos= response as TodosModel[];
      }
    );
  }
  addTodos(){  
    this.modelHeader ='ADD TODOS';
    this.todosObj = new TodosModel();
   
   
  }
  editeTodos(todo:TodosModel){      
    this.modelHeader='EDITE Todos';  
    this.todosObj=todo; 
 
  }
  deletTodos(id:number){
    this.tService.delete(id).subscribe(
      (response)=>{
        alert('are sure delet :'+id+'deleted');
        let _itemIndex=this.todos.findIndex(x=>x.id==id);
        this.todos.splice(_itemIndex,1);
      }
    );
  }
  saveTodos(){
    if(this.modelHeader =='ADD TODOS'){
      this.tService.create(this.todosObj).subscribe(
        (response)=>{
         
         // this.alertMessage='add successfully.....!';
         this.toster.success('add successfully.....!')
          this.todos.splice(0, 0, response as TodosModel);
        }
      );
    }
    else{
      this.tService.update(this.todosObj.id,this.todosObj).subscribe(
        (response)=>{
        //  this.alertMessage='update successfully....!';
        this.toster.success('update successfully....!')
          let _itemIndex=this.todos.findIndex(x=>x.id==this.todosObj.id);
          this.todos[_itemIndex]=response as TodosModel;
          
        }
      );
    }
    this.todosObj=new TodosModel();
  }
}
