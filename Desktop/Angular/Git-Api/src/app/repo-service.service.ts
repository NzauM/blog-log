import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  _URL = 'https://api.github.com/users/';
  token = '?access_token= 14f4c00a07dd03e8b057a4011e8e88e6d77b4b29';

  constructor(public  http: HttpClient) {

   }
   getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
  }
}



