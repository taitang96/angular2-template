import { UrlConstants } from './../core/common/url.constants';
import { MessageContstants } from './../core/common/message.constants';
import { AuthenService } from './../core/services/authen.service';
import { NotificationService } from './../core/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.authenservice.login(this.model.username, this.model.password).subscribe((data: {}) => {
      this.router.navigate([UrlConstants.HOME]);
    });
  }

}
