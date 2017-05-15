import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCompanyDetails } from './add-company-details';

@NgModule({
  declarations: [
    AddCompanyDetails,
  ],
  imports: [
    IonicPageModule.forChild(AddCompanyDetails),
  ],
  exports: [
    AddCompanyDetails
  ]
})
export class AddCompanyDetailsModule {}
