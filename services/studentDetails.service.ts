import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

export class studentDetailsService{
	private students: {name: string, email: string}[] = [];

	addStudent(student: {name: string, email: string}){
		this.students.push(student);
	}

	getStudent(){
    
    this.students = [];
	this.http.get('http://localhost:3000/student_list').subscribe(data => {
    console.log(data.json().length);
    });
	
	for(var i=0; i<data.json().length; i++){
		this.students.push({name: data.json()[i].name, email: data.json()[i].email});
	}

	return this.students.slice();
	}
}
