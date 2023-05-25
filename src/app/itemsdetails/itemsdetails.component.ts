import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemsModel } from '../items/item.model';

 @Component({
  selector: 'itemsdetails',
   templateUrl: './itemsdetails.component.html',
   styleUrls: ['./itemsdetails.component.css']
 })
export class ItemsdetailsComponent {

@Input() item = new ItemsModel();
@Output() _newItemEvent =new EventEmitter<string>();

 

addNewItem(value:string){
 this._newItemEvent.emit(value);
 }

}

