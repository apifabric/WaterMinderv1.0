import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HydrationSettingHomeComponent } from './home/HydrationSetting-home.component';
import { HydrationSettingNewComponent } from './new/HydrationSetting-new.component';
import { HydrationSettingDetailComponent } from './detail/HydrationSetting-detail.component';

const routes: Routes = [
  {path: '', component: HydrationSettingHomeComponent},
  { path: 'new', component: HydrationSettingNewComponent },
  { path: ':id', component: HydrationSettingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'HydrationSetting-detail-permissions'
      }
    }
  }
];

export const HYDRATIONSETTING_MODULE_DECLARATIONS = [
    HydrationSettingHomeComponent,
    HydrationSettingNewComponent,
    HydrationSettingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HydrationSettingRoutingModule { }