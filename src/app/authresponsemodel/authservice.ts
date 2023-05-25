import {HttpResponse } from "@angular/common/http";
import { AuthResponseModel } from "./authresponsemodel";

export class AuthService{
    authentiCate(userName:string,password:string){
        if(userName==='SuperAdmin@gmail.com'&& password===''){
            let authResponseModel:AuthResponseModel={
                userName:'super Admin',
                mail:'SuperAdmin@gmail.com',
                role:'admin',
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlN1cGVyQWRtaW5AZ21haWwuY29tIiwicGFzc3dvcmQiOjIzMjYxOTk2LCJyb2xlIjoiYWRtaW4ifQ.KULQuwBKRRl0oxMA9ZjhI1OkHtEZVOopTcsb_T1e0Vs',
            }
            return new HttpResponse({status:200,statusText:'login successful....!,',body:authResponseModel});
        }
        else if(userName==='ravijadi@gmail.com'&& password==='8765211'){
            let authResponseModel:AuthResponseModel={
                userName:'ravi',
                mail:'ravijadi@gmail.com',
                role:'user',
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlN1cGVyQWRtaW5AZ21haWwuY29tIiwicGFzc3dvcmQiOjIzMjYxOTk2LCJyb2xlIjoidXNlciJ9.8MS0ZACWy6OaFthZdtFunDsrgMjoxK3t-ZEdAO_XdTA',
    }
    return new HttpResponse({status:200,statusText:'login successful....!,',body:authResponseModel});
}
else{
    return new HttpResponse({status:401,statusText:'Invalid credential....!',body:null});
}
}
get name(){
    return localStorage.getItem('name');
}
get role(){
    return localStorage.getItem('role');
    }
get token(){
    return localStorage.getItem('token')
}
}