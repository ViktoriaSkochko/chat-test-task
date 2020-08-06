import { Component, OnInit } from '@angular/core';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-window-bottom-bar',
  templateUrl: './chat-window-bottom-bar.component.html',
  styleUrls: ['./chat-window-bottom-bar.component.scss']
})
export class ChatWindowBottomBarComponent implements OnInit {
  faPaperPlane = faPaperPlane;

  constructor() { }

  ngOnInit(): void {
  }

}
