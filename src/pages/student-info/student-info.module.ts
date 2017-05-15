import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentInfo } from './student-info';

@NgModule({
  declarations: [
    StudentInfo,
  ],
  imports: [
    IonicPageModule.forChild(StudentInfo),
  ],
  exports: [
    StudentInfo
  ]
})
export class StudentInfoModule {}
