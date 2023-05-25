import { Component, OnInit } from '@angular/core';
import { EmployeModel } from '../employee/employe.model';
import { EmployService } from '../employee/employe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'employedetails',
  templateUrl: './employedetails.component.html',
  styleUrls: ['./employedetails.component.css']
})
export class EmployedetailsComponent implements OnInit{

  constructor(private eService:EmployService, private router: ActivatedRoute){

  }
  employe=new EmployeModel();
  ngOnInit(): void {
     
    let id=this.router.snapshot.paramMap.get('id');
    let employes=id? id:'';
    this.eService.getById(employes).subscribe(response=>{
      if(response){
        this.employe=response;
      }
    })
  }
    
  }


