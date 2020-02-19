import { NotificationService } from './../core/services/notification.service';
import { DataService } from './../core/services/data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: RoleComponent}
];

@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers:[DataService, NotificationService]
})
export class RoleModule {}
