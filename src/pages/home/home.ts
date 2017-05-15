import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentDetails } from "../student-details/student-details";
import { CompanyDetails } from "../company-details/company-details";


import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

/*export class HomePage {
    constructor(private http: Http, public nav: NavController, private alertCtrl: AlertController) {
        
    }

  makeGetRequest() {
      this.http.get('http://localhost:3000/student_list').subscribe(data => {
      console.log(data.json().length);
      });

    }
}*/

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  

  onLoadStudentDetails(){
  	this.navCtrl.push(StudentDetails);
  }

  onLoadCompanyDetails(){
  	this.navCtrl.push(CompanyDetails);
  }

} 
