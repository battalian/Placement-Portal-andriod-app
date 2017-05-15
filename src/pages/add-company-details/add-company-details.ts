import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { companyDetailsService} from "../../services/companyDetails.service" 

/**
 * Generated class for the AddStudentDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-company-details',
  templateUrl: 'add-company-details.html',
})
export class AddCompanyDetails {

  constructor(public navCtrl: NavController, public navParams: NavParams, private cmpDetService:companyDetailsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCompanyDetails');
  }

  logForm(value: {name: string, place: string}){
  	this.cmpDetService.addCompany(value);
  	this.navCtrl.pop();
  }
}
