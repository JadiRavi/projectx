 

import { Component, OnInit } from '@angular/core';
import { ItemsModel } from './item.model';
import { ItemService } from './items.service';

@Component({
  selector: 'items',
  templateUrl:'./items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

  _itemCount:number=0;

  items:ItemsModel[]=[];
    
  constructor(private _itemService:ItemService){}
  ngOnInit(): void {
    this.loadData(); 
  }
  loadData(){
    this.items=this._itemService.read();
  }
  addItem(_item:string){
    console.log(_item);
  this._itemCount=this._itemCount + + 1;
   }
}