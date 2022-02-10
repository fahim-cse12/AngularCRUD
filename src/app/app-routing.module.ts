import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employees/createEmployee/createEmployee.component';
import { ListEmployeeComponent } from './employees/listEmployee/listEmployee.component';

const routes: Routes = [
  {path: 'list', component: ListEmployeeComponent },
  {path: 'create', component: CreateEmployeeComponent },
  {path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
