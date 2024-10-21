import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'WaterConsumption-new',
  templateUrl: './WaterConsumption-new.component.html',
  styleUrls: ['./WaterConsumption-new.component.scss']
})
export class WaterConsumptionNewComponent {
  @ViewChild("WaterConsumptionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}