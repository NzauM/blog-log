import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  repoSearch:any;

  @Output() repoName = new EventEmitter<any>();

  search(){
    this.repoName.emit(this.repoSearch);
    this.repoSearch = "";
  }

  constructor() { }

  ngOnInit() {
  }

}
