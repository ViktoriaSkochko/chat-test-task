import {Component, OnInit} from '@angular/core';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-chat-window-bottom-bar',
  templateUrl: './chat-window-bottom-bar.component.html',
  styleUrls: ['./chat-window-bottom-bar.component.scss']
})
export class ChatWindowBottomBarComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      message: ''
    })
  }

  sendMessage() {
    console.log(this.myForm.value.message);
    this.myForm.reset();
  }

}
