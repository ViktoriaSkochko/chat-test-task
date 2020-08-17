import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessagesService} from "../../services/messages.service";
import {USERS} from "../../chat-users";
import {Joke, Message, User} from "../../user";

@Component({
  selector: 'app-chat-window-message-history',
  templateUrl: './chat-window-message-history.component.html',
  styleUrls: ['./chat-window-message-history.component.scss']
})
export class ChatWindowMessageHistoryComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  message: string;
  allUsers = USERS;
  user: User;
  currentDate = new Date();
  joke: Joke;

  constructor(private data: MessagesService) {

  }

  ngOnInit(): void {
    this.data.currentUser.subscribe(user => {
      this.user = user;
      this.scrollToBottom();
    });
    this.data.currentMessage.subscribe(messageEventData => {
      // message from me
      if (messageEventData !== null) {
        this.message = messageEventData;
        const messageFromMe: Message = {
          text: this.message,
          date: this.currentDate,
          isFromUser: false,
        };
        this.allUsers.find
        (oneUser => oneUser.id === this.user.id)
          .messages.push(messageFromMe);
        this.scrollToBottom();
        // message from user
        this.data.getRandomJoke().then(joke => {
          const messageFromUser = {
            text: joke.value,
            date: this.currentDate,
            isFromUser: true,
          };
          this.allUsers.find
          (oneUser => oneUser.id === this.user.id)
            .messages.push(messageFromUser);
          this.scrollToBottom();
        });
      }
    });
  };

  scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch (err) {
      }
    }, 1);
  }
}
