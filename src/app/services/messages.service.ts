import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Joke, User} from "../user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private userSource = new BehaviorSubject(null);
  currentUser = this.userSource.asObservable();

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {
  }


  changeUser(user: User) {
    this.userSource.next(user)
  }

  changeMessage(message: string) {
    this.messageSource.next(message);

  }

  getRandomJoke(): Promise<Joke> {
    return new Promise((resolve, reject) => {
      this.http.get<Joke>('https://api.chucknorris.io/jokes/random'
      ).subscribe((response: Joke) => {
        resolve(response);
      }, reject);
    });
  }
}
