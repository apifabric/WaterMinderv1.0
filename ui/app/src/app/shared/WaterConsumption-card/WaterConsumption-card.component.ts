import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WaterConsumption-card.component.html',
  styleUrls: ['./WaterConsumption-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WaterConsumption-card]': 'true'
  }
})

export class WaterConsumptionCardComponent {


}