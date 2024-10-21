import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationHomeComponent } from './home/Notification-home.component';
import { NotificationNewComponent } from './new/Notification-new.component';
import { NotificationDetailComponent } from './detail/Notification-detail.component';

const routes: Routes = [
  {path: '', component: NotificationHomeComponent},
  { path: 'new', component: NotificationNewComponent },
  { path: ':id', component: NotificationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Notification-detail-permissions'
      }
    }
  },{
    path: ':notification_id/UserNotification', loadChildren: () => import('../UserNotification/UserNotification.module').then(m => m.UserNotificationModule),
    data: {
        oPermission: {
            permissionId: 'UserNotification-detail-permissions'
        }
    }
}
];

export const NOTIFICATION_MODULE_DECLARATIONS = [
    NotificationHomeComponent,
    NotificationNewComponent,
    NotificationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }