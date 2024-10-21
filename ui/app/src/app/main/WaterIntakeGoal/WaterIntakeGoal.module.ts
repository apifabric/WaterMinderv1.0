import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WATERINTAKEGOAL_MODULE_DECLARATIONS, WaterIntakeGoalRoutingModule} from  './WaterIntakeGoal-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WaterIntakeGoalRoutingModule
  ],
  declarations: WATERINTAKEGOAL_MODULE_DECLARATIONS,
  exports: WATERINTAKEGOAL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WaterIntakeGoalModule { }