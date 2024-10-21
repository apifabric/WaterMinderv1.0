import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERACHIEVEMENT_MODULE_DECLARATIONS, UserAchievementRoutingModule} from  './UserAchievement-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserAchievementRoutingModule
  ],
  declarations: USERACHIEVEMENT_MODULE_DECLARATIONS,
  exports: USERACHIEVEMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserAchievementModule { }