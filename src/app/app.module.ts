import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainItComponent } from './pages/main-it/main-it.component';
import { MainHrComponent } from './pages/main-hr/main-hr.component';
import { MainHeadComponent } from './pages/main-head/main-head.component';
import { MainBoardComponent } from './pages/main-board/main-board.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

import { HeaderHrComponent } from './components/header-hr/header-hr.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { ShiftTypeComponent } from './components/shift-type/shift-type.component';
import { HeaderItComponent } from './components/header-it/header-it.component';
import { HeaderHeadComponent } from './components/header-head/header-head.component';
import { HeaderBoardComponent } from './components/header-board/header-board.component';
import { AccountSettingComponent } from './components/account-setting/account-setting.component';
import { ListOfEmployeesComponent } from './components/list-of-employees/list-of-employees.component';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { DepartmentAddComponent } from './pages/department-add/department-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaveQuotaListComponent } from './pages/leave-quota-list/leave-quota-list.component';
import { EmployeeLeaveQuotaComponent } from './pages/employee-leave-quota/employee-leave-quota.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { SchedulePatternListComponent } from './components/schedule-pattern-list/schedule-pattern-list.component';
import { PendingUserComponent } from './components/pending-user/pending-user.component';
import { EmployeeLeaveListComponent } from './components/employee-leave-list/employee-leave-list.component';
import { CalendarHrComponent } from './pages/calendar-hr/calendar-hr.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MainItComponent,
    MainHrComponent,
    MainHeadComponent,
    MainBoardComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HeaderHrComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    ShiftTypeComponent,
    HeaderItComponent,
    HeaderHeadComponent,
    HeaderBoardComponent,
    AccountSettingComponent,
    ListOfEmployeesComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    LeaveQuotaListComponent,
    EmployeeLeaveQuotaComponent,
    FooterComponent,
    ListUserComponent,
    SchedulePatternListComponent,
    PendingUserComponent,
    EmployeeLeaveListComponent,
    CalendarHrComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginPageModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      closeButton: true,
      easing: 'ease-in-out',
      easeTime: 400,
      progressBar: true,
      progressAnimation: 'increasing'
    }),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
