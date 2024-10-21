import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAchievementHomeComponent } from './home/UserAchievement-home.component';
import { UserAchievementNewComponent } from './new/UserAchievement-new.component';
import { UserAchievementDetailComponent } from './detail/UserAchievement-detail.component';

const routes: Routes = [
  {path: '', component: UserAchievementHomeComponent},
  { path: 'new', component: UserAchievementNewComponent },
  { path: ':id', component: UserAchievementDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserAchievement-detail-permissions'
      }
    }
  }
];

export const USERACHIEVEMENT_MODULE_DECLARATIONS = [
    UserAchievementHomeComponent,
    UserAchievementNewComponent,
    UserAchievementDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAchievementRoutingModule { }