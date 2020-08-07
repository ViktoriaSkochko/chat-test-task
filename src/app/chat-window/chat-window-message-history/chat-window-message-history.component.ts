import { Component, OnInit } from '@angular/core';
import {Message, User} from "../../user";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-chat-window-message-history',
  templateUrl: './chat-window-message-history.component.html',
  styleUrls: ['./chat-window-message-history.component.scss']
})
export class ChatWindowMessageHistoryComponent implements OnInit {
  user: User;
  message: Message;

  constructor(private data: MessagesService) {

  }

  ngOnInit(): void {
    this.data.currentUser.subscribe(user => this.user = user);
  }

}
