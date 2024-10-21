import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserAchievement-card.component.html',
  styleUrls: ['./UserAchievement-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserAchievement-card]': 'true'
  }
})

export class UserAchievementCardComponent {


}