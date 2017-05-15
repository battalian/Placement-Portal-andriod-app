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
  selector: 'page-student-info',
  templateUrl: 'student-info.html',
})
export class StudentInfo {

  student: any;	
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.student = navParams.get('student');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentInfo');
  }

}
