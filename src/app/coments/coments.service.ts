import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";  
 
import { CommonSrvice } from "../Services/comonservice.service";

@Injectable({providedIn:'root'})

export class ComentsService extends CommonSrvice{ 


    constructor(httpClient:HttpClient){
        super('https://jsonplaceholder.typicode.com/comments',httpClient); 
    }
//     create(coment:ComentsModel){
//         return this.httpClient.post('https://jsonplaceholder.typicode.com/comments',coment);
//     }
//     read(){
//         return this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
//     }
//     update(id:number, coment:ComentsModel){
//         return this.httpClient.put('https://jsonplaceholder.typicode.com/comments'+'/'+id,coment);
//     }
//     delete(id:number){
//         return this.httpClient.delete('https://jsonplaceholder.typicode.com/comments' +'/'+id);
//     }
}
