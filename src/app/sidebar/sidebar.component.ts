import {Component, OnInit} from '@angular/core';
import {faCheckCircle, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {USERS} from '../chat-users';
import {MessagesService} from "../services/messages.service";
import {User} from "../user";

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
  user: User;

  constructor(private data: MessagesService) {
  }

  ngOnInit(): void {
    this.data.changeUser(USERS[0])
  }

  onClick(user: User): void {
    this.data.changeUser(user)
  }
}
