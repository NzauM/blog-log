import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { GitUser } from './git-user';
import { SearchUserComponent } from './search-user/search-user.component';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserViceService {
  user: GitUser[] = [];
  _URL = 'https://api.github.com/users/';
  token = '?access_token= acbea5f3a8ae30bfa3fc9d75a344bc77d38a0453';

  constructor(private http:HttpClient) { 

  }

  searchMyUser(searchTerm: string) {
   
    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followers: string;
      public_repos: string;
    }

    return new Promise((resolve, reject) => {
      this.user = [];
      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          // @ts-ignore
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
  }
}



