import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataFromDs = new BehaviorSubject<string>('');

  currentData = this.dataFromDs.asObservable();

  constructor() { }
  updateData(data: string) {
    this.dataFromDs.next(data);
  }

}
