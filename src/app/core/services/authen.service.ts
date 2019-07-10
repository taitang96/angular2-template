import { SystemConstants } from './../common/system.contants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { encode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
      const body = 'userName=' + encodeURI(username) +
      '&password=' + encodeURI(password) + '&grant_type=password';
      return this._http.post<any>(SystemConstants.BASE_API + '/api/oauth/token', body);
  }

  logout() {

  }

  isUserAuthenticated(): boolean {
    return true;
  }

  getLoggedInUser(): any {
    return null;
  }

}
