import { LoginModel } from "./login.model";

export class LoginService{

    loginModel:LoginModel[]=[

       {id:1234,userName:'Ravi jadi',password:'Ravijadi@1996'},
       {id:2326,userName:'Ramaya Sunarkani',password:' ramya@2002'},
       {id:2326,userName:'Mahesh Jadi', password:'mahesh1223'},
       {id:2326,userName:'Ravinder Janagam', password:'ravinder628120'},
       {id:2326,userName:'Raghu Sunarkani',password:'009911'},
    ];
    create(_item:LoginModel){
        this.loginModel.splice(0,0, _item);
    }
    read(){
        return this.loginModel;
    }
    update(id:number,_item:LoginModel){
        let _itemIndex=this.loginModel.findIndex(x=>x.id==id);
        this.loginModel[_itemIndex]=_item;
    }
    delete(id:number){
        let _itemIndex=this.loginModel.findIndex(x=>x.id==id);
        this.loginModel.splice(_itemIndex,1)
    }
    getById(id:number){
        let _itemIndex=this.loginModel.findIndex(x=>x.id==id);
        return this.loginModel[_itemIndex];
    }

}