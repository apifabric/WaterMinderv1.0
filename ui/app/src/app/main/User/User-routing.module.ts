import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/HydrationSetting', loadChildren: () => import('../HydrationSetting/HydrationSetting.module').then(m => m.HydrationSettingModule),
    data: {
        oPermission: {
            permissionId: 'HydrationSetting-detail-permissions'
        }
    }
},{
    path: ':user_id/ProgressMilestone', loadChildren: () => import('../ProgressMilestone/ProgressMilestone.module').then(m => m.ProgressMilestoneModule),
    data: {
        oPermission: {
            permissionId: 'ProgressMilestone-detail-permissions'
        }
    }
},{
    path: ':user_id/Reminder', loadChildren: () => import('../Reminder/Reminder.module').then(m => m.ReminderModule),
    data: {
        oPermission: {
            permissionId: 'Reminder-detail-permissions'
        }
    }
},{
    path: ':user_id/UserAchievement', loadChildren: () => import('../UserAchievement/UserAchievement.module').then(m => m.UserAchievementModule),
    data: {
        oPermission: {
            permissionId: 'UserAchievement-detail-permissions'
        }
    }
},{
    path: ':user_id/UserChallenge', loadChildren: () => import('../UserChallenge/UserChallenge.module').then(m => m.UserChallengeModule),
    data: {
        oPermission: {
            permissionId: 'UserChallenge-detail-permissions'
        }
    }
},{
    path: ':user_id/UserNotification', loadChildren: () => import('../UserNotification/UserNotification.module').then(m => m.UserNotificationModule),
    data: {
        oPermission: {
            permissionId: 'UserNotification-detail-permissions'
        }
    }
},{
    path: ':user_id/WaterConsumption', loadChildren: () => import('../WaterConsumption/WaterConsumption.module').then(m => m.WaterConsumptionModule),
    data: {
        oPermission: {
            permissionId: 'WaterConsumption-detail-permissions'
        }
    }
},{
    path: ':user_id/WaterConsumptionStatistic', loadChildren: () => import('../WaterConsumptionStatistic/WaterConsumptionStatistic.module').then(m => m.WaterConsumptionStatisticModule),
    data: {
        oPermission: {
            permissionId: 'WaterConsumptionStatistic-detail-permissions'
        }
    }
},{
    path: ':user_id/WaterIntakeGoal', loadChildren: () => import('../WaterIntakeGoal/WaterIntakeGoal.module').then(m => m.WaterIntakeGoalModule),
    data: {
        oPermission: {
            permissionId: 'WaterIntakeGoal-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }