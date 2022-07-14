import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  enteredSearchValue: string = '';
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
