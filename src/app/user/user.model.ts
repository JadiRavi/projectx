export class UserModel{
  
    id:number; 
    name:string;
    username:string;
    email:string;
    address:AddressModel=new AddressModel();  
    phone:number;
    website:string;
    company:CompanyModel = new CompanyModel();
}

    class AddressModel{
        street:string;
        suite:string;
        city:string;
        zipcode:number;
        geo:GeoModel= new GeoModel();
    }
    class CompanyModel{
        name:string ;
        catchPhrase:string;
        bs:string;
    }
    class GeoModel{
        lat:number;
        lng:number;
    }
