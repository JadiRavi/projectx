import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserModel } from "./user.model";


@Injectable({providedIn:'root'})

export class UserService{
  
constructor(private httpClient:HttpClient){    
}
create(user:UserModel){
    return this.httpClient.post('https://jsonplaceholder.typicode.com/users',user);
}
read(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    }
  update(id:number,user:UserModel)  {
    return this.httpClient.put('https://jsonplaceholder.typicode.com/users'+ '/'+ id ,user);
  }
  delete(id:number){

  return this.httpClient.delete('https://jsonplaceholder.typicode.com/users'+'/' + id);
}
getById(id:number){
return this.httpClient.get('https://jsonplaceholder.typicode.com/users'+'/' + id);
}
}