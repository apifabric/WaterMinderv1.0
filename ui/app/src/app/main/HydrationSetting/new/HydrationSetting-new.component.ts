import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'HydrationSetting-new',
  templateUrl: './HydrationSetting-new.component.html',
  styleUrls: ['./HydrationSetting-new.component.scss']
})
export class HydrationSettingNewComponent {
  @ViewChild("HydrationSettingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}