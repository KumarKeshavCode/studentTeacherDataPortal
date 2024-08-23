import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/srvice/http.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() userdata: any;
  constructor(private httpService: HttpService){}
  

}
