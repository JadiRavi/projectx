import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostModel } from "./post.model";
 
 
@Injectable({providedIn:'root'})
export class PostService{
 
constructor(private httpClient:HttpClient){    
}
create(post:PostModel){
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',post);
}
read(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    }
update(id:number,post:PostModel){
    return this.httpClient.put('https://jsonplaceholder.typicode.com/posts/'+id,post);
    }
delete(id:number){
return this.httpClient.delete('https://jsonplaceholder.typicode.com/posts'+'/' +id);
}
getById(id:number){
return this.httpClient.get('https://jsonplaceholder.typicode.com/posts'+'/' +id);
}
}