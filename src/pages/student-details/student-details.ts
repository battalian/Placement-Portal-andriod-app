import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddStudentDetails } from "../add-student-details/add-student-details";
import { studentDetailsService} from "../../services/studentDetails.service" 
import { StudentInfo } from "../student-info/student-info";

import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetails {
  
  
  students: {name: string, email: string}[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private stdDetService:studentDetailsService, private http: Http) {
  }

  ionViewWillEnter(){
  	//this.students = this.stdDetService.getStudent();
    this.students = [];
    this.http.get('http://localhost:3000/student_list').subscribe(data => {
     console.log(data.json().length);
    
  
  for(var i=0; i<data.json().length; i++){
    this.students.push({name: data.json()[i].name, email: data.json()[i].email});
  }

  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetails');
  }

  addNewStudentDetails(){
  	this.navCtrl.push(AddStudentDetails);
  }

  studentInfo(event, student){
  	this.navCtrl.push( StudentInfo, {
      student: student
    });	
  }


}
