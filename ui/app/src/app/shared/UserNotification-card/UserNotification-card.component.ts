import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserNotification-card.component.html',
  styleUrls: ['./UserNotification-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserNotification-card]': 'true'
  }
})

export class UserNotificationCardComponent {


}