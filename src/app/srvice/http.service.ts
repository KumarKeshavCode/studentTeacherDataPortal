import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiurl  = 'http://localhost:3000/';

  constructor(private http :HttpClient) { }


  addStudent(student: any) {
    return this.http.post(`${this.apiurl}/students`, student);
  }

}
