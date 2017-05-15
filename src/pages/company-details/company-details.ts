import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddCompanyDetails } from "../add-company-details/add-company-details";
import { companyDetailsService} from "../../services/companyDetails.service" 
import { CompanyInfo } from "../company-info/company-info";

@IonicPage()
@Component({
  selector: 'page-company-details',
  templateUrl: 'company-details.html',
})
export class CompanyDetails {

  companies: {name: string, place: string}[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cmpDetService:companyDetailsService) {
  }

  ionViewWillEnter(){
  	this.companies = this.cmpDetService.getCompany();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyDetails');
  }

  addNewcompanyDetails(){
  	this.navCtrl.push(AddCompanyDetails);
  }

  companyInfo(event, company){
  	this.navCtrl.push( CompanyInfo, {
      company: company
    });	
  }


}
