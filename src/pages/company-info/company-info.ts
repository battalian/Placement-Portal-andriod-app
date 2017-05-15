import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-company-info',
  templateUrl: 'company-info.html',
})
export class CompanyInfo {

  company: any;	
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.company = navParams.get('company');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyInfo');
  }

}
