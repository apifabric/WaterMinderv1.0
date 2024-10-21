import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterConsumptionHomeComponent } from './home/WaterConsumption-home.component';
import { WaterConsumptionNewComponent } from './new/WaterConsumption-new.component';
import { WaterConsumptionDetailComponent } from './detail/WaterConsumption-detail.component';

const routes: Routes = [
  {path: '', component: WaterConsumptionHomeComponent},
  { path: 'new', component: WaterConsumptionNewComponent },
  { path: ':id', component: WaterConsumptionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WaterConsumption-detail-permissions'
      }
    }
  }
];

export const WATERCONSUMPTION_MODULE_DECLARATIONS = [
    WaterConsumptionHomeComponent,
    WaterConsumptionNewComponent,
    WaterConsumptionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterConsumptionRoutingModule { }