import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Alert } from 'ionic-angular';
import { Http } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StudentDetails } from "../pages/student-details/student-details";
import { AddStudentDetails } from "../pages/add-student-details/add-student-details";
import { studentDetailsService } from "../services/studentDetails.service";
import { StudentInfo } from "../pages/student-info/student-info";
import { CompanyDetails } from "../pages/company-details/company-details";
import { AddCompanyDetails } from "../pages/add-company-details/add-company-details";
import { CompanyInfo } from "../pages/company-info/company-info";
import { companyDetailsService } from "../services/companyDetails.service";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudentDetails,
    AddStudentDetails,
    StudentInfo,
    CompanyDetails,
    AddCompanyDetails,
    CompanyInfo
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudentDetails,
    AddStudentDetails,
    StudentInfo,
    CompanyDetails,
    AddCompanyDetails,
    CompanyInfo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, studentDetailsService, companyDetailsService
  ]
})
export class AppModule {}
