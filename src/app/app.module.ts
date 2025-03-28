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
    ShiftTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginPageModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
