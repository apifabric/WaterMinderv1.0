import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserChallenge-card.component.html',
  styleUrls: ['./UserChallenge-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserChallenge-card]': 'true'
  }
})

export class UserChallengeCardComponent {


}