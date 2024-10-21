import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'CustomChallenge', loadChildren: () => import('./CustomChallenge/CustomChallenge.module').then(m => m.CustomChallengeModule) },
    
        { path: 'HydrationSetting', loadChildren: () => import('./HydrationSetting/HydrationSetting.module').then(m => m.HydrationSettingModule) },
    
        { path: 'Notification', loadChildren: () => import('./Notification/Notification.module').then(m => m.NotificationModule) },
    
        { path: 'ProgressMilestone', loadChildren: () => import('./ProgressMilestone/ProgressMilestone.module').then(m => m.ProgressMilestoneModule) },
    
        { path: 'Reminder', loadChildren: () => import('./Reminder/Reminder.module').then(m => m.ReminderModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserAchievement', loadChildren: () => import('./UserAchievement/UserAchievement.module').then(m => m.UserAchievementModule) },
    
        { path: 'UserChallenge', loadChildren: () => import('./UserChallenge/UserChallenge.module').then(m => m.UserChallengeModule) },
    
        { path: 'UserNotification', loadChildren: () => import('./UserNotification/UserNotification.module').then(m => m.UserNotificationModule) },
    
        { path: 'WaterConsumption', loadChildren: () => import('./WaterConsumption/WaterConsumption.module').then(m => m.WaterConsumptionModule) },
    
        { path: 'WaterConsumptionStatistic', loadChildren: () => import('./WaterConsumptionStatistic/WaterConsumptionStatistic.module').then(m => m.WaterConsumptionStatisticModule) },
    
        { path: 'WaterIntakeGoal', loadChildren: () => import('./WaterIntakeGoal/WaterIntakeGoal.module').then(m => m.WaterIntakeGoalModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }