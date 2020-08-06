import {Component, OnInit} from '@angular/core';
import {faCheckCircle, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {USERS} from '../chat-users';
import {MessagesService} from "../services/messages.service";

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
  name: string;

  constructor(private data: MessagesService) {
  }

  ngOnInit(): void {

  }

  onSelect(name: string): void {
    this.data.changeName(name)
  }
}
