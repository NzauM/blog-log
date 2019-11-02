import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { from } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { Users } from './users';
import { Repos } from './repos';
import { resolve } from 'url'
import { reject } from 'q'


@Injectable({
  providedIn: 'root'
})
export class GitApiService {

  users:Users;
  repos:Repos;
  newRepo:any;
  

  constructor(private http: HttpClient) {
    
   }

  // getInfo(username:string){
  //   let urlOfApi = 'https://api.github.com/users/${username}?token=${ environment.token }';
  //   return this.http.get<Users>(urlOfApi);
  // }

  // getRepo(username:string){
  //   let urlOfApi = '`https://api.github.com/users/${username}/repos?token=${ environment.token}';
  //   return this.http.get<Repos[]>(urlOfApi)
  // }

  // searchUser(username: string){
  //   return this.http.get('https://api.github.com/search/users?q=${username}');
  // }

  // searchRepo(username:string){
  //   return this.http.get<Repos[]>(
  //     'https://api.githyb.com/users/${username}/repos'
  //   );
  // }

  // getRepos(repoName:string){
  //   return this.http.get<Repos>(
  //     'https://api.github.com/serch/repositories?Q${repoName}'
  //   );
  // }
}
