import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-listEmployee',
  templateUrl: './listEmployee.component.html',
  styleUrls: ['./listEmployee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988').toString(),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/281077.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979').toString(),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/b1e91da930db4c715519246f51ff74d1.jpg'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976').toString(),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/muslim-man-png-5-png-image-muslim-man-png-315_497.png'
    },
  ];

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
