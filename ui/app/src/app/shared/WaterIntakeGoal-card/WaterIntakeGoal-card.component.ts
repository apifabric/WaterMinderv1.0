import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WaterIntakeGoal-card.component.html',
  styleUrls: ['./WaterIntakeGoal-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WaterIntakeGoal-card]': 'true'
  }
})

export class WaterIntakeGoalCardComponent {


}