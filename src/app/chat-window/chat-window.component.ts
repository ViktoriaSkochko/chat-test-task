import {Component, OnInit} from '@angular/core';
import {faCheckCircle, faPaperPlane, faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  faUserCircle = faUserCircle;
  faCheckCircle = faCheckCircle;
  faPaperPlane = faPaperPlane;

  constructor() {
  }

  ngOnInit(): void {
  }

}
