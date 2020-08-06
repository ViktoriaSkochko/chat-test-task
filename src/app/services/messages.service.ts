import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messageSource = new BehaviorSubject(null);
  currentUser = this.messageSource.asObservable();


  constructor() {
  }

  changeUser(user: User) {
    this.messageSource.next(user)
  }

}
