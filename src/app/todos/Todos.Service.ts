import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TodosModel } from "./todos.medel";


@Injectable({providedIn:'root'})
export class TodosService{
    constructor(private httpclent:HttpClient){
    }
    create(todo:TodosModel){
        return this.httpclent.post('https://jsonplaceholder.typicode.com/todos/',todo);
    }
    read(){
        return this.httpclent.get('https://jsonplaceholder.typicode.com/todos');
    }
    update(id:number,todo:TodosModel){
        return this.httpclent.put('https://jsonplaceholder.typicode.com/todos/'+id,todo);
    }
    delete(id:number){
        return this.httpclent.delete('https://jsonplaceholder.typicode.com/todos'+'/' + id)
    }
    getById(id:number){
        return this.httpclent.get('https://jsonplaceholder.typicode.com/todos'+'/' + id)
    }
}