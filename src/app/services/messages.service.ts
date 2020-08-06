import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messageSource = new BehaviorSubject('Alice Freeman');
  currentName = this.messageSource.asObservable();


  constructor() { }

  changeName(name: string) {
    this.messageSource.next(name)
  }

}
