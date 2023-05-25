import { StudentModel } from "./student.model";

export class StudentService {
    student:StudentModel[] = [
      {
        id:1,
        name:'Ravi',
        fname:'narsaiah',
        deparment:'MA',
        marks:990
      },
      {
        id:2,
        name:'Ramya',
        fname:'Rama Rao',
        deparment:'CSC',
        marks:990
      },
      {
        id:3,
        name:'Mahesh',
        fname:'Sree Ram',
        deparment:'BA',
        marks:800
      },
    ]

    create(item:StudentModel) {
      this.student.splice(0,0,item);
    }
    read(){
      return this.student;
    }
    update(id:number,item:StudentModel) {
      let _itemIndex =this.student.findIndex(x => x.id == id);
      this.student[_itemIndex] = item;
    }

    delete(id:number){
      let _itemIndex =this.student.findIndex(x => x.id == id);
      this.student.splice(_itemIndex,1);
    }
    getById(id:number) {
      let _itemIndex =this.student.findIndex(x => x.id == id);
      return this.student[_itemIndex];
    }
  
}
