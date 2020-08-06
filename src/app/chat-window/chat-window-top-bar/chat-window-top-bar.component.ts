import {Component, OnInit} from '@angular/core';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-chat-window-top-bar',
  templateUrl: './chat-window-top-bar.component.html',
  styleUrls: ['./chat-window-top-bar.component.scss']
})
export class ChatWindowTopBarComponent implements OnInit {
  faCheckCircle = faCheckCircle;
  name: string;

  constructor(private data: MessagesService) {

  }

  ngOnInit(): void {
    this.data.currentName.subscribe(name => this.name = name)
  }

}
