import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CUSTOMCHALLENGE_MODULE_DECLARATIONS, CustomChallengeRoutingModule} from  './CustomChallenge-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CustomChallengeRoutingModule
  ],
  declarations: CUSTOMCHALLENGE_MODULE_DECLARATIONS,
  exports: CUSTOMCHALLENGE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomChallengeModule { }