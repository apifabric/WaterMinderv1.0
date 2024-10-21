import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERNOTIFICATION_MODULE_DECLARATIONS, UserNotificationRoutingModule} from  './UserNotification-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserNotificationRoutingModule
  ],
  declarations: USERNOTIFICATION_MODULE_DECLARATIONS,
  exports: USERNOTIFICATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserNotificationModule { }