import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserChallengeHomeComponent } from './home/UserChallenge-home.component';
import { UserChallengeNewComponent } from './new/UserChallenge-new.component';
import { UserChallengeDetailComponent } from './detail/UserChallenge-detail.component';

const routes: Routes = [
  {path: '', component: UserChallengeHomeComponent},
  { path: 'new', component: UserChallengeNewComponent },
  { path: ':id', component: UserChallengeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserChallenge-detail-permissions'
      }
    }
  }
];

export const USERCHALLENGE_MODULE_DECLARATIONS = [
    UserChallengeHomeComponent,
    UserChallengeNewComponent,
    UserChallengeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserChallengeRoutingModule { }