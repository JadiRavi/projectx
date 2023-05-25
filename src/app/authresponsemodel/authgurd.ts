// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
// import { AuthService } from "./authservice";
// import { Injectable } from "@angular/core";
// @Injectable()
// export class AuthGourd implements CanActivate{
// constructor(private _router:Router , private _authService:AuthService){}
// CanActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
//     if(this._authService.token){
//         return true;
//     }
//     else{
//         this._router.navigate(['/un-authorized']);
//         return false;
//     }
// }
// }