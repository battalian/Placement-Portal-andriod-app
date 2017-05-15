import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { studentDetailsService} from "../../services/studentDetails.service" 

/**
 * Generated class for the AddStudentDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-student-details',
  templateUrl: 'add-student-details.html',
})
export class AddStudentDetails {

  constructor(public navCtrl: NavController, public navParams: NavParams, private stdDetService:studentDetailsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStudentDetails');
  }

  logForm(value: {name: string, email: string}){
  	this.stdDetService.addStudent(value);
  	this.navCtrl.pop();
  }
}
