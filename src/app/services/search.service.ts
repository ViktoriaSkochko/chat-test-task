import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSourceUser = new BehaviorSubject(null);
  currentSearchUser = this.searchSourceUser.asObservable();

  private searchSourceMessage = new BehaviorSubject(null);
  currentSearchMessage = this.searchSourceMessage.asObservable();

  constructor() {
  }

  changeSearchUser(search: string) {
    this.searchSourceUser.next(search);
  }

  changeSearchMessage(search: string) {
    this.searchSourceMessage.next(search);
  }
}

