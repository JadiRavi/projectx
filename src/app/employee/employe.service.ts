import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { EmployeModel } from "./employe.model";

@Injectable({providedIn:'root'})
export class EmployService{

    constructor(private firestore:AngularFirestore){}

    create(employees:EmployeModel){
        return this.firestore.collection('employe').add({...employees});
    }
     read(){
       return this.firestore.collection('employe').snapshotChanges();
      }
      update(id:string, employee:EmployeModel){
      return  this.firestore.doc('employe/'+id).update({...employee});
      }
      delete(id:string){
        return this.firestore.doc('employe/'+id).delete();
      }
      getById(id:string){
        return this.firestore.doc<EmployeModel>('employe/' + id).valueChanges();

      }
}