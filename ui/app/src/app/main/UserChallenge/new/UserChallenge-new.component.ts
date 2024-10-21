import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserChallenge-new',
  templateUrl: './UserChallenge-new.component.html',
  styleUrls: ['./UserChallenge-new.component.scss']
})
export class UserChallengeNewComponent {
  @ViewChild("UserChallengeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}