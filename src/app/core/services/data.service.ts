import { AuthenService } from './authen.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SystemConstants } from '../common/system.contants';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers: HttpHeaders;

  constructor(private _http: HttpClient,private _router: Router, private _authenService: AuthenService) { }

  get(url: string) {
    this.headers = new HttpHeaders().delete('Authorization');
    this.headers = this.headers.set('Authorization', 'Bearer ' + this._authenService.getLoggedInUser().access_token);
    return this._http.get(SystemConstants.BASE_API + url, {headers: this.headers});
  }

  post(url: string, data?: any) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer ' + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + url, {headers: this.headers});
  }

  put(url: string, data?: any) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer ' + this._authenService.getLoggedInUser().access_token);
    return this._http.put(SystemConstants.BASE_API + url, data, {headers: this.headers});
  }

  delete(url: string, key: string, id: string) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer ' + this._authenService.getLoggedInUser().access_token);
    return this._http.get(SystemConstants.BASE_API + url + '/?' + key + '=' + id, {headers: this.headers});
  }

  postFile(url: string, data?: any) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer ' + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + url, data, {headers: this.headers});
  }

}
