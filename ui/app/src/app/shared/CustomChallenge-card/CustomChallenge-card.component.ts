import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CustomChallenge-card.component.html',
  styleUrls: ['./CustomChallenge-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CustomChallenge-card]': 'true'
  }
})

export class CustomChallengeCardComponent {


}