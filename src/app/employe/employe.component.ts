import { Component } from '@angular/core';
import { EmployService } from '../employee/employe.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeModel } from '../employee/employe.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {

constructor(private eSrvice:EmployService, private toster:ToastrService){}

modelHeader:string='';
employee:EmployeModel[]=[];
employes=new EmployeModel();

employeform =new FormGroup({
  name:new FormControl(null,Validators.required ),
  email:new FormControl(null, Validators.required),
  gender:new FormControl(null, Validators.required),
  mobileNumber:new FormControl(null, Validators.required),
  salary:new FormControl(null, Validators.required),
  city:new FormControl(null, Validators.required),
})
addEmploye(){
  this.modelHeader='Add employe....!';
  this.employes= new EmployeModel();
  
}
editeEmploye(employees:EmployeModel){
  this.modelHeader='Edite employe.....!';
  this.employes=employees;
}


deleteEmploye(id?:string){

  let _id=id ? id:'';
  this.eSrvice.delete(_id).then((response)=>{
    this.toster.success('Delete successfull.....!')

  });
}

saveEmploye(){
 if (this.employes.id){
  this.eSrvice.update(this.employes.id,this.employes).then((response)=>{
    this.toster.success('update succesfull....!');
  });
 }
 else{
  this.eSrvice.create(this.employes).then((response)=>{
    this.toster.success('add Successfull....!')
  });
 }
 

}

 
ngOnInit(){

  this.loadData();

}
loadData(){

this.eSrvice.read()

.subscribe(response=>{

  this.employee=response.map((data)=>{
    return {
      id:data.payload.doc.id,
      ...data.payload.doc.data()as EmployeModel
    }
  });
})
 }
} 
  