import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CustomChallenge-new',
  templateUrl: './CustomChallenge-new.component.html',
  styleUrls: ['./CustomChallenge-new.component.scss']
})
export class CustomChallengeNewComponent {
  @ViewChild("CustomChallengeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}