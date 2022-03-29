import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { ProductComponent } from './product/product.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'departments',
    component: DepartmentListComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'material-ui',
    component: MaterialUiComponent
  },
  {
    path: 'task-tracker',
    component: TaskTrackerComponent
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
