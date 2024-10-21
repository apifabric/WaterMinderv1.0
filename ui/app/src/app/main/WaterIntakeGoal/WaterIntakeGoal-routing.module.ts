import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterIntakeGoalHomeComponent } from './home/WaterIntakeGoal-home.component';
import { WaterIntakeGoalNewComponent } from './new/WaterIntakeGoal-new.component';
import { WaterIntakeGoalDetailComponent } from './detail/WaterIntakeGoal-detail.component';

const routes: Routes = [
  {path: '', component: WaterIntakeGoalHomeComponent},
  { path: 'new', component: WaterIntakeGoalNewComponent },
  { path: ':id', component: WaterIntakeGoalDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WaterIntakeGoal-detail-permissions'
      }
    }
  }
];

export const WATERINTAKEGOAL_MODULE_DECLARATIONS = [
    WaterIntakeGoalHomeComponent,
    WaterIntakeGoalNewComponent,
    WaterIntakeGoalDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterIntakeGoalRoutingModule { }