import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
