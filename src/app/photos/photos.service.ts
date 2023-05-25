import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PhotosMedel } from "./photos.model";


@Injectable({providedIn:'root'})
export class PhotosService{
    constructor(private httpClient:HttpClient){
    }
    create(photo:PhotosMedel){
        return this.httpClient.post('https://jsonplaceholder.typicode.com/photos/',photo);
    }
    reade(){
        return this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
    }
    update(id:number,photo:PhotosMedel){
        return this.httpClient.put('https://jsonplaceholder.typicode.com/photos/'+ id ,+photo);
    }
    delete(id:number){
        return this.httpClient.delete('https://jsonplaceholder.typicode.com/photos'+'/' + id)
    }

}