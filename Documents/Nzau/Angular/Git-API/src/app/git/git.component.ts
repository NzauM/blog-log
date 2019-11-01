import { Component, OnInit } from '@angular/core';
import { Users } from '../users'
import { from } from 'rxjs';
import { Repos } from '../repos'


@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
