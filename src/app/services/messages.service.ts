import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messageSource = new BehaviorSubject(0);
  currentId = this.messageSource.asObservable();


  constructor() { }

  changeId(id: number) {
    this.messageSource.next(id)
  }

}
