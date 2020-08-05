import { Component, OnInit, Input } from '@angular/core';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {User} from "../../user";


@Component({
  selector: 'app-sidebar-user-item',
  templateUrl: './sidebar-user-item.component.html',
  styleUrls: ['./sidebar-user-item.component.scss']
})
export class SidebarUserItemComponent implements OnInit {
  @Input() user: User;
  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
