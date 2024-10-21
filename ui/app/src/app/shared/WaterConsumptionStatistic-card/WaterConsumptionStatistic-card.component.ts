import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WaterConsumptionStatistic-card.component.html',
  styleUrls: ['./WaterConsumptionStatistic-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WaterConsumptionStatistic-card]': 'true'
  }
})

export class WaterConsumptionStatisticCardComponent {


}