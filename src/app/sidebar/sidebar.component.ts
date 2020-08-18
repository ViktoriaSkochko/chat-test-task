import {Component, OnInit} from '@angular/core';
import {faCheckCircle, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {USERS} from '../chat-users';
import {MessagesService} from "../services/messages.service";
import {User} from "../user";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faUserCircle = faUserCircle;
  faCheckCircle = faCheckCircle;

  users = USERS;
  user: User[];

  constructor(private data: MessagesService, private searchData: SearchService) {
  }

  ngOnInit(): void {
    this.data.changeUser(USERS[0]);
    // subscribe to search service
    this.searchData.currentSearch.subscribe(search => {
      if (search) {
        this.users = USERS.filter(item => item.name.toLowerCase().includes(search))
      } else {
        this.users = USERS
      }
    })
  }

  onClick(user: User): void {
    this.data.changeUser(user)
  }
}
