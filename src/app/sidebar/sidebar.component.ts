import {Component, OnInit} from '@angular/core';
import {faCheckCircle, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { User } from '../user';
import { USERS } from '../chat-users';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faUserCircle = faUserCircle;
  faCheckCircle = faCheckCircle;
  faSearch = faSearch;

  users = USERS;
  selectedUser: User;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
