import { Component, Input } from '@angular/core';
import { Site } from '@core/models';

@Component({
  selector: 'app-available-rates',
  templateUrl: './available-rates.component.html',
  styleUrls: ['./available-rates.component.css'],
})
export class AvailableRatesComponent {
  @Input() hotelSites: Site[] = [];
}
