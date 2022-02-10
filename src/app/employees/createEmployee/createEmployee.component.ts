import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { Department } from 'src/app/Models/department';
import { Employee } from 'src/app/Models/Employee.model';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-createEmployee',
  templateUrl: './createEmployee.component.html',
  styleUrls: ['./createEmployee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  departments: Department[] = [
    {id: 1, name: 'ITID' },
    {id: 2, name: 'HR' },
    {id: 3, name: 'Development' },
    {id: 4, name: 'Sales' },
    {id: 5, name: 'Implementation' },
    {id: 6, name: 'Support' }
  ];
  previewPhoto = false;
  emp: Employee = new Employee();
  employee: Employee = {
      id: 0,
      name : '',
      gender : '',
      email : '',
      phoneNumber : null,
      dateOfBirth : '',
      contactPreference : '',
      department : '',
      isActive : true,
      photoPath : ''
  };
  gender = 'Male';

  constructor() { }

  // tslint:disable-next-line: typedef
  toggleImagePreview()
  {
     this.previewPhoto = !this.previewPhoto;
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  saveEmployee(employee: Employee): void{
    console.log(employee);
  }

}
