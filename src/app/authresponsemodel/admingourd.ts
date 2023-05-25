// import { Injectable } from "@angular/core";
 
// import { AuthService } from "./authservice";
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from "@angular/router";
 

// @Injectable()
// export class AdminGourd implements  CanActivate{
//     constructor(private _router:Router,private _authService:AuthService){}
//     canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
//         if(this._authService.token && this._authService.role==='Admin'){
//             return true;
//         }
//         else{
//             this._router.navigate(['/un-authorized']);
//             return false;
//         }
//     }
// }