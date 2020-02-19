import { SystemConstants } from './../common/system.contants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { encode } from 'punycode';
import { LoggedInUser } from '../domain/loggedin.user';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
      const body = 'username=' + encodeURI(username) +
      '&password=' + encodeURI(password) + '&grant_type=password';
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.post<LoggedInUser>(SystemConstants.BASE_API + '/api/oauth/token', body);
  }

  logout() {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
  }

  isUserAuthenticated(): boolean {
    const user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (user != null) {
      return true;
    }
    return false;
  }

  getLoggedInUser(): LoggedInUser {
    let user: LoggedInUser;
    if (this.isUserAuthenticated){
      const userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      user = new LoggedInUser(userData.access_token, userData.username, userData.fullName, userData.email, userData.avatar);
    } else {
      user = null;
    }
    return user;
  }

}
