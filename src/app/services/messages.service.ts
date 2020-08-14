import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private userSource = new BehaviorSubject(null);
  currentUser = this.userSource.asObservable();

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  constructor() {
  }

  changeUser(user: User) {
    this.userSource.next(user)
  }

  changeMessage(message: string) {
    this.messageSource.next(message);

  }
}
