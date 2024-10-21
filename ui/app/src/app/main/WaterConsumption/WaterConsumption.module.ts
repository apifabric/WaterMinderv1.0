import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WATERCONSUMPTION_MODULE_DECLARATIONS, WaterConsumptionRoutingModule} from  './WaterConsumption-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WaterConsumptionRoutingModule
  ],
  declarations: WATERCONSUMPTION_MODULE_DECLARATIONS,
  exports: WATERCONSUMPTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WaterConsumptionModule { }