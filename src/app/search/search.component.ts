import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  enteredSearchValue: string = '';

  @Output() searchTextChanged: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

  ngOnInit(): void {}
}
