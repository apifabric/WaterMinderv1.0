import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'WaterConsumptionStatistic-new',
  templateUrl: './WaterConsumptionStatistic-new.component.html',
  styleUrls: ['./WaterConsumptionStatistic-new.component.scss']
})
export class WaterConsumptionStatisticNewComponent {
  @ViewChild("WaterConsumptionStatisticForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}