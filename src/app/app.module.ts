import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListModule } from './user-list/user-list.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './material-ui/material.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';

import { StoreInfoService } from './store-info.service';
import { UsersService } from './users.service';
import { TaskService } from './task.service';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WelcomeComponent,
    HeaderComponent,
    ProductComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    MaterialUiComponent,
    TaskTrackerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserListModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    AuthModule,
  ],
  providers: [StoreInfoService, UsersService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
