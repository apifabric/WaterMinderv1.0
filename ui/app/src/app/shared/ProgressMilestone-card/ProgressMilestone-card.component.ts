import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ProgressMilestone-card.component.html',
  styleUrls: ['./ProgressMilestone-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ProgressMilestone-card]': 'true'
  }
})

export class ProgressMilestoneCardComponent {


}