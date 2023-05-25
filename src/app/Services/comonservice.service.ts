import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core"; 
 

@Injectable({providedIn:'root'})


export class  CommonSrvice{ 
 
 
    constructor(@Inject(String) private apiBaseUrl:string, private httpClient:HttpClient){
    }
    create(resourse:any){
        return this.httpClient.post(this.apiBaseUrl,resourse);
    }
    read(){
        return this.httpClient.get(this.apiBaseUrl);
    }
    update(id:number, resourse:any){
        return this.httpClient.put(this.apiBaseUrl+'/'+id,resourse);
    }
    delete(id:number){
        return this.httpClient.delete(this.apiBaseUrl +'/'+id);
    }
    getById(id:number){
        return this.httpClient.get(this.apiBaseUrl +'/'+id);
    }
}

