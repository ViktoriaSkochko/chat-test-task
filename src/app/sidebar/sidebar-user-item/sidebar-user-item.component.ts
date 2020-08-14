import {Component, Input, OnInit} from '@angular/core';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {Message, User} from "../../user";


@Component({
  selector: 'app-sidebar-user-item',
  templateUrl: './sidebar-user-item.component.html',
  styleUrls: ['./sidebar-user-item.component.scss']
})
export class SidebarUserItemComponent implements OnInit {
  @Input() user: User;
  @Input() message: Message;
  faCheckCircle = faCheckCircle;
  currentDate = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

  getLastMessage() {
    let text;
    let textLength;
    textLength = this.user.messages?.length - 1;
    text = this.user.messages[textLength].text;
    return text;
  }
}
