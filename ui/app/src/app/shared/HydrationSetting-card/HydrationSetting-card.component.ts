import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './HydrationSetting-card.component.html',
  styleUrls: ['./HydrationSetting-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.HydrationSetting-card]': 'true'
  }
})

export class HydrationSettingCardComponent {


}