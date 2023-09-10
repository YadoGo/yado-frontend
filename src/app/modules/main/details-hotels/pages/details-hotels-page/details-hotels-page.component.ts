import { Component } from '@angular/core';
import { Hotel } from '@core/models';

@Component({
  selector: 'app-details-hotels-page',
  templateUrl: './details-hotels-page.component.html',
  styleUrls: ['./details-hotels-page.component.css'],
})
export class DetailsHotelsPageComponent {
  hotel!: Hotel;

  review = 8.4;
  total_reviews = 200;
  price = 200;
  company = 'Hotels';
}
