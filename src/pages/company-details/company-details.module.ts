import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyDetails } from './company-details';

@NgModule({
  declarations: [
    CompanyDetails,
  ],
  imports: [
    IonicPageModule.forChild(CompanyDetails),
  ],
  exports: [
    CompanyDetails
  ]
})
export class CompanyDetailsModule {}
