import {Component, OnInit} from '@angular/core';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {MessagesService} from "../../services/messages.service";
import {User} from "../../user";

@Component({
  selector: 'app-chat-window-top-bar',
  templateUrl: './chat-window-top-bar.component.html',
  styleUrls: ['./chat-window-top-bar.component.scss']
})
export class ChatWindowTopBarComponent implements OnInit {
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  user: User;

  constructor(private data: MessagesService) {

  }

  ngOnInit(): void {
    this.data.currentUser.subscribe(user => this.user = user)
  }

}
