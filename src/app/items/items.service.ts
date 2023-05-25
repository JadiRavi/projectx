import { ItemsModel } from "./item.model";

export class ItemService{

    items:ItemsModel[]=[
        {id:1,name:'One Plus 11R',descripation:'hhh',price:100,ram:'8Gb RAM',storage:'254'},
        {id:1,name:'One Plus norde c5',descripation:' hggggbhgg',price:200,ram:'6Gb RAM',storage:'124'},
        {id:1,name:'One Plus norde ce2 Lite 5g',descripation:'hhhhh',price:200,ram:'6Gb RAM',storage:'124'},
        {id:1,name:'One Plus norde ce2 Lite 5g',descripation:'bbbb ',price:200,ram:'6Gb RAM',storage:'124'},
    ];

        create(_item:ItemsModel){
            this.items.splice(0,0,_item);
        }
        read(){
            return this.items;
        }
        update(id:number,item:ItemsModel){
        let _itemIndex= this.items.findIndex(x=>x.id==id);
       
         this.items[_itemIndex]=item;

        }
        delete(id:number){
           let _itemIndex =this.items.findIndex(x=>x.id==id);
           this.items.splice(_itemIndex,1);
        }
    }