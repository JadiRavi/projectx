
import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../student/student.model';
import { StudentService } from '../student/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentails',
  templateUrl: './studentails.component.html',
  styleUrls: ['./studentails.component.css']
})
export class StudentailsComponent implements OnInit {
  student= new StudentModel();
constructor(private sService:StudentService,private router :ActivatedRoute){}
  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    let student = id ? + id : 0;
    this.student = this.sService.getById(student)
  }

}
