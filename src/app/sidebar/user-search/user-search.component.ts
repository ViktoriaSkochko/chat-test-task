import {Component, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  faSearch = faSearch;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private searchData: SearchService) {
  }

  ngOnInit(): void {
    // create form
    this.myForm = this.fb.group({
      searchFormInput: '',
    })
    // subscribe to form changes
    this.myForm.get('searchFormInput').valueChanges.subscribe(searchValue => {
      this.searchData.changeSearchUser(searchValue.toLowerCase())
    })
  }
}
