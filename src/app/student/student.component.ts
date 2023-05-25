import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { StudentModel } from './student.model';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  student:StudentModel[] = [];

  constructor(private sservices:StudentService){

  }

  ngOnInit(): void {
      this.loadData();
  }
  loadData(){
    this.student = this.sservices.read();
  }

}
