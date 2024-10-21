import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserAchievement-new',
  templateUrl: './UserAchievement-new.component.html',
  styleUrls: ['./UserAchievement-new.component.scss']
})
export class UserAchievementNewComponent {
  @ViewChild("UserAchievementForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}