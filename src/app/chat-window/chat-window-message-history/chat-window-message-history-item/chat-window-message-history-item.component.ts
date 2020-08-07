import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../user";

@Component({
  selector: 'app-chat-window-message-history-item',
  templateUrl: './chat-window-message-history-item.component.html',
  styleUrls: ['./chat-window-message-history-item.component.scss']
})
export class ChatWindowMessageHistoryItemComponent implements OnInit {
  @Input() message: Message;
  @Input() avatar;

  constructor() {
  }

  ngOnInit(): void {
  }

}
