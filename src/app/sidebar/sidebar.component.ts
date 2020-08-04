import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faUserCircle = faUserCircle;
  faCheckCircle = faCheckCircle;
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
