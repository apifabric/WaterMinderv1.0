import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERCHALLENGE_MODULE_DECLARATIONS, UserChallengeRoutingModule} from  './UserChallenge-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserChallengeRoutingModule
  ],
  declarations: USERCHALLENGE_MODULE_DECLARATIONS,
  exports: USERCHALLENGE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserChallengeModule { }