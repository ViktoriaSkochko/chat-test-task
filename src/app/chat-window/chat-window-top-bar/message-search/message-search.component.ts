import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-message-search',
  templateUrl: './message-search.component.html',
  styleUrls: ['./message-search.component.scss']
})
export class MessageSearchComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private searchData: SearchService) { }

  ngOnInit(): void {
    // create form
    this.myForm = this.fb.group({
      searchFormInput: '',
    })
    // subscribe to form changes
    this.myForm.get('searchFormInput').valueChanges.subscribe(searchValue => {
      this.searchData.changeSearchMessage(searchValue.toLowerCase())
    })
  }
}
