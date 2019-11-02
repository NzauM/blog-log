import { Component, OnInit } from '@angular/core';
import { Users } from '../users'
import { from } from 'rxjs';
import { Repos } from '../repos';
import { GitApiService}   from 'src/app/git-api.service';
// import { environment } from "src/environments/environment"       


@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  info:Users;
  updatedInfo:Users;
  Repos:Repos[] = [ ];
  updatedRepos:Repos[] = [ ];
  inputText:string;

  constructor(private gitResponse: GitApiService) {
    this.info = new Users ( "","",0,"",0,0);
   }

   search(searchWord) {
     this.inputText=searchWord;
     this.gitResponse.searchUser(searchWord).subscribe(
       data => {
         this.updatedInfo = new Users(
          //  data["items"][0].login,
           data["items"][0].avatar_url,
           "",0,"",0,0
         );
       },
       error => {
         console.log("There has been an error")
       }
     )
   }



  ngOnInit() {
    this.updatedInfo = new Users("","",0,"",0,0);

    this.gitResponse.getInfo("NzauM").subscribe(data => {
      this.info = new Users(
        data.avatar_url,
        data.name,
        data.repos,
        data.html_url,
        data.followers,
        data.following,
      );
    });
    this.gitResponse.getRepo("NzauM").subscribe(data => {
      for (let i = 0; i<data.length;i++){
        let repo = new Repos(
          data[i].name,
          data[i].html_url,
          data[i].description,
          data[i].creationDate
        );
        this.Repos.push(repo)
      }
    });
    if(this.inputText){
      // this.search(this.inputText);
    }
  }

}
