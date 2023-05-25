import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-operations';
  menuName:string='home';

  loggedInUser:string;
  constructor(){
  let name= localStorage.getItem('name');
  this.loggedInUser=name? name:'';
}
logout(){
  
}
}
