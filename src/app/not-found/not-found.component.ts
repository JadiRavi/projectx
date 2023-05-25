import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'notfound',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
constructor(private router:Router){}
gotoHome(){
  this.router.navigate(['/home']);

}
imgUrl="/assets/Explained_-Error-404-Not-Found.jpg"
}
