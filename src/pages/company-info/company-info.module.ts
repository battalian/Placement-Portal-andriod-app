import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyInfo } from './company-info';

@NgModule({
  declarations: [
    CompanyInfo,
  ],
  imports: [
    IonicPageModule.forChild(CompanyInfo),
  ],
  exports: [
    CompanyInfo
  ]
})
export class CompanyInfoModule {}
