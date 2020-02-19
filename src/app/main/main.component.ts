import { UtilityService } from './../core/services/utility.service';
import { AuthenService } from './../core/services/authen.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemConstants } from '../core/common/system.contants';
import { UrlConstants } from '../core/common/url.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private authenservice: AuthenService, private router: Router) { }
  user = this.authenservice.getLoggedInUser();

  ngOnInit() {
  }

  logOut() {
    this.authenservice.logout();
    this.router.navigate([UrlConstants.LOGIN]);
  }

}
