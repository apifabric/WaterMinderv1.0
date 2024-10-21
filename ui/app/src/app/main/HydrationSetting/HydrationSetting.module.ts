import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {HYDRATIONSETTING_MODULE_DECLARATIONS, HydrationSettingRoutingModule} from  './HydrationSetting-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    HydrationSettingRoutingModule
  ],
  declarations: HYDRATIONSETTING_MODULE_DECLARATIONS,
  exports: HYDRATIONSETTING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HydrationSettingModule { }