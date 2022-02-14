import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee.model';
import { EmployeeServiceService } from 'src/app/services/employeeService.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-listEmployee',
  templateUrl: './listEmployee.component.html',
  styleUrls: ['./listEmployee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees!: Employee[];
  // tslint:disable-next-line: variable-name
  constructor(private _employeeService: EmployeeServiceService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.employees = this._employeeService.getAllEmployees();
  }


}
