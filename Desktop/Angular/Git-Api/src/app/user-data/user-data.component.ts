import { Component, OnInit } from '@angular/core';
import { UserViceService } from '../user-vice.service';
import { GitUser } from '../git-user';



@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user:GitUser[];
  
  constructor(private service:UserViceService) { }

  getSearchedUser(searchTerm) {
    this.service.searchMyUser(searchTerm).then(
      (success) => {
        this.user = this.service.user;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getSearchedUser('NzauM');
    
  }
  }


