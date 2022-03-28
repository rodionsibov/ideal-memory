import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
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
    path: '',
    component: MaterialUiComponent
  },
  {
    path: 'task-tracker',
    component: TaskTrackerComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
