import {Component, OnInit} from '@angular/core';
import {faCheckCircle, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faUserCircle = faUserCircle;
  faCheckCircle = faCheckCircle;
  faSearch = faSearch;

  constructor() {
  }

  ngOnInit(): void {
  }

}
