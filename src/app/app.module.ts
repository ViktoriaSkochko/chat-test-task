import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';
import { SidebarUserItemComponent } from './sidebar/sidebar-user-item/sidebar-user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatWindowComponent,
    SidebarUserItemComponent
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
