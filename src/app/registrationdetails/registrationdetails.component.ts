import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from '../registration/registration.model';
import { RegistartationService } from '../registration/registration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrationdetails',
  templateUrl: './registrationdetails.component.html',
  styleUrls: ['./registrationdetails.component.css']
})
export class RegistrationdetailsComponent implements OnInit {

  register=new RegistrationModel();
  constructor(private  rService :RegistartationService,private router: ActivatedRoute){}
  ngOnInit(): void {
    
    let id=this.router.snapshot.paramMap.get('id');
    let register=id?+id:0;
    this.register=this.rService.getById(register)
  }

}
