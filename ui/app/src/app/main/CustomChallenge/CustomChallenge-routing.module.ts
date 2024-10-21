import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomChallengeHomeComponent } from './home/CustomChallenge-home.component';
import { CustomChallengeNewComponent } from './new/CustomChallenge-new.component';
import { CustomChallengeDetailComponent } from './detail/CustomChallenge-detail.component';

const routes: Routes = [
  {path: '', component: CustomChallengeHomeComponent},
  { path: 'new', component: CustomChallengeNewComponent },
  { path: ':id', component: CustomChallengeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CustomChallenge-detail-permissions'
      }
    }
  },{
    path: ':challenge_id/UserChallenge', loadChildren: () => import('../UserChallenge/UserChallenge.module').then(m => m.UserChallengeModule),
    data: {
        oPermission: {
            permissionId: 'UserChallenge-detail-permissions'
        }
    }
}
];

export const CUSTOMCHALLENGE_MODULE_DECLARATIONS = [
    CustomChallengeHomeComponent,
    CustomChallengeNewComponent,
    CustomChallengeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomChallengeRoutingModule { }