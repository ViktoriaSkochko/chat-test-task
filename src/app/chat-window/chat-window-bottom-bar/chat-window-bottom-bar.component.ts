import {Component, Input, OnInit} from '@angular/core';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-chat-window-bottom-bar',
  templateUrl: './chat-window-bottom-bar.component.html',
  styleUrls: ['./chat-window-bottom-bar.component.scss']
})
export class ChatWindowBottomBarComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  myForm: FormGroup;


  constructor(private fb: FormBuilder, private data: MessagesService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      message: ''
    })
  }

  sendMessage() {
    this.data.changeMessage(this.myForm.value.message);
    this.myForm.reset()
  }

}
