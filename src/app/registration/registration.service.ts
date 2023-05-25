import { RegistrationModel } from "./registration.model";

export class RegistartationService{
    register:RegistrationModel[]=[
        {id:1,name:'ravi',surName:'jadi',fatherName:'narsaiah',motherName:'mallamma',phoneNumber:70754636630},
        {id:2,name:'madhuri',surName:'jadi',fatherName:'sammaiah',motherName:'padma',phoneNumber:70754636630},
        {id:3,name:'kavya',surName:'jadi',fatherName:'veeraiah',motherName:'manjula',phoneNumber:70754636630},
        {id:4,name:'sumantha',surName:'jadi',fatherName:'ramesh',motherName:'swapna',phoneNumber:70754636630},    
        
    ];

     
    create(_item:RegistrationModel){
        this.register.splice(0,0, _item);
    }
    read(){
        return this.register;
    }
    update(id:number,_item:RegistrationModel){
        let _itemIndex=this.register.findIndex(x=>x.id==id);
        this.register[_itemIndex]=_item;
    }
    delete(id:number){
        let _itemIndex=this.register.findIndex(x=>x.id==id);
        this.register.splice(_itemIndex,1)
    }
    getById(id:number){
        let _itemIndex=this.register.findIndex(x=>x.id==id);
        return this.register[_itemIndex];
    }

}
