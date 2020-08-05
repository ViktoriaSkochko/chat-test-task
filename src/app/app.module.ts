import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';
import { SidebarUserItemComponent } from './sidebar/sidebar-user-item/sidebar-user-item.component';
import { ChatWindowTopBarComponent } from './chat-window/chat-window-top-bar/chat-window-top-bar.component';
import { ChatWindowMessageHistoryComponent } from './chat-window/chat-window-message-history/chat-window-message-history.component';
import { ChatWindowBottomBarComponent } from './chat-window/chat-window-bottom-bar/chat-window-bottom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatWindowComponent,
    SidebarUserItemComponent,
    ChatWindowTopBarComponent,
    ChatWindowMessageHistoryComponent,
    ChatWindowBottomBarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
