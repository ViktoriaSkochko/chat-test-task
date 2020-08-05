import {Component, OnInit} from '@angular/core';
import {faCheckCircle, faPaperPlane, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {MessagesService} from "../services/messages.service";

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  faCheckCircle = faCheckCircle;
  faPaperPlane = faPaperPlane;
  faUserCircle = faUserCircle;
  id: number;

  constructor(private data: MessagesService) {
  }

  ngOnInit(): void {
    this.data.currentId.subscribe(id => this.id = id)
  }

}
