import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiurl  = 'http://localhost:3000/';

  constructor(private http :HttpClient) { }


  addStudent(students: any) {
    console.log("aaya add student");
    return this.http.post(`http://localhost:3000/students`, students);
  }
  addteacher(teacher :any){
    console.log("aaya add teacher");
    return this.http.post(`http://localhost:3000/teachers`, teacher);
  }

  getStudents(): Observable<any> {
    return this.http.get(`http://localhost:3000/students`);
  }

  getTeacherData():Observable<any>{
    return this.http.get(`http://localhost:3000/teachers`);
  }

}
