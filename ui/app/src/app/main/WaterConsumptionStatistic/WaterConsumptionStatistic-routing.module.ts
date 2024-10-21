import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterConsumptionStatisticHomeComponent } from './home/WaterConsumptionStatistic-home.component';
import { WaterConsumptionStatisticNewComponent } from './new/WaterConsumptionStatistic-new.component';
import { WaterConsumptionStatisticDetailComponent } from './detail/WaterConsumptionStatistic-detail.component';

const routes: Routes = [
  {path: '', component: WaterConsumptionStatisticHomeComponent},
  { path: 'new', component: WaterConsumptionStatisticNewComponent },
  { path: ':id', component: WaterConsumptionStatisticDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WaterConsumptionStatistic-detail-permissions'
      }
    }
  }
];

export const WATERCONSUMPTIONSTATISTIC_MODULE_DECLARATIONS = [
    WaterConsumptionStatisticHomeComponent,
    WaterConsumptionStatisticNewComponent,
    WaterConsumptionStatisticDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterConsumptionStatisticRoutingModule { }