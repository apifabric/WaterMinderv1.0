import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNotificationHomeComponent } from './home/UserNotification-home.component';
import { UserNotificationNewComponent } from './new/UserNotification-new.component';
import { UserNotificationDetailComponent } from './detail/UserNotification-detail.component';

const routes: Routes = [
  {path: '', component: UserNotificationHomeComponent},
  { path: 'new', component: UserNotificationNewComponent },
  { path: ':id', component: UserNotificationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserNotification-detail-permissions'
      }
    }
  }
];

export const USERNOTIFICATION_MODULE_DECLARATIONS = [
    UserNotificationHomeComponent,
    UserNotificationNewComponent,
    UserNotificationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserNotificationRoutingModule { }