import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressMilestoneHomeComponent } from './home/ProgressMilestone-home.component';
import { ProgressMilestoneNewComponent } from './new/ProgressMilestone-new.component';
import { ProgressMilestoneDetailComponent } from './detail/ProgressMilestone-detail.component';

const routes: Routes = [
  {path: '', component: ProgressMilestoneHomeComponent},
  { path: 'new', component: ProgressMilestoneNewComponent },
  { path: ':id', component: ProgressMilestoneDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ProgressMilestone-detail-permissions'
      }
    }
  }
];

export const PROGRESSMILESTONE_MODULE_DECLARATIONS = [
    ProgressMilestoneHomeComponent,
    ProgressMilestoneNewComponent,
    ProgressMilestoneDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressMilestoneRoutingModule { }