import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddStudentDetails } from './add-student-details';

@NgModule({
  declarations: [
    AddStudentDetails,
  ],
  imports: [
    IonicPageModule.forChild(AddStudentDetails),
  ],
  exports: [
    AddStudentDetails
  ]
})
export class AddStudentDetailsModule {}
