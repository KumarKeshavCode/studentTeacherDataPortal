import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/srvice/http.service';
import { DataService } from 'src/app/srvice/data/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
   studentdata : any[]= [];
   @Input() searchText: string = '';

  constructor(private httpService: HttpService , private dataservice : DataService){}

  ngOnInit(){
    this.httpService. getStudents().subscribe(data => {
      this.studentdata = data;
    });

    this.dataservice.currentData.subscribe((data) => {
      this.searchText = data;
    });
  }
  }


