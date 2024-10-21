import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PROGRESSMILESTONE_MODULE_DECLARATIONS, ProgressMilestoneRoutingModule} from  './ProgressMilestone-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ProgressMilestoneRoutingModule
  ],
  declarations: PROGRESSMILESTONE_MODULE_DECLARATIONS,
  exports: PROGRESSMILESTONE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgressMilestoneModule { }