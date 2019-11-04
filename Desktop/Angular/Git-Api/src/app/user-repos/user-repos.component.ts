import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoServiceService } from '../repo-service.service';


@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {
  // myRepo: Repo[];
  // userRepo:Repo[];
  // user:Repo;
  myRepo:Repo[];

  constructor(public reposerv: RepoServiceService) {
  }
 

  getRepo(searchTerm: string) {
    this.reposerv.getRepo(searchTerm).subscribe(data => {
      this.myRepo = data;
      return(this.myRepo);
    });
  }

  // initialRepo(owner:string){
  //   this.reposerv.getRepo(owner).subscribe(data => {
  //     this.userRepo = data;
  //     console.log(this.userRepo);
  //   })
  // }
  ngOnInit() {
    //  let repoSearch = {{u.html_url}}
    this.getRepo('NzauM');
    // this.initialRepo;
  }
}