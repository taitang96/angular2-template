import { SystemConstants } from './../core/common/system.contants';
import { UrlConstants } from './../core/common/url.constants';
import { MessageContstants } from './../core/common/message.constants';
import { AuthenService } from './../core/services/authen.service';
import { NotificationService } from './../core/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInUser } from '../core/domain/loggedin.user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  IssuesList: any;
  constructor(private authenservice: AuthenService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authenservice.login(this.model.username, this.model.password).subscribe(data => {
      const json = JSON.parse(JSON.stringify(data));
      const user: LoggedInUser = data;
      if (user && user.access_token) {
        localStorage.removeItem(SystemConstants.CURRENT_USER);
        localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
      }
      this.router.navigate([UrlConstants.HOME]);
    }, error => {
      console.log(error);
    });
  }

}
