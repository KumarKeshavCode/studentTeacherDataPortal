import { Component } from '@angular/core';
import { HttpService } from 'src/app/srvice/http.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {

  teacherdata :any[]=[];

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getTeacherData().subscribe(data=>{
      this.teacherdata=data;
    })
  }
}
