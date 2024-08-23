import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/srvice/http.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
   studentdata : any[]= [];

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService. getStudents().subscribe(data => {
      this.studentdata = data;
    });
  }

}
