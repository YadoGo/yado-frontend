import { Component } from '@angular/core';
import { Hotel } from '@core/models';

@Component({
  selector: 'app-details-hotels-page',
  templateUrl: './details-hotels-page.component.html',
  styleUrls: ['./details-hotels-page.component.css'],
})
export class DetailsHotelsPageComponent {
  hotel: Hotel = {
    uuid: '1',
    name: 'Hotel Barcelona Beachfront',
    description: 'A luxurious hotel with stunning beach views.',
    stars: 3,
    address: '123 Beach Ave, Barcelona',
    latitude: 41.3866,
    longitude: 2.1676,
    num_visited: 250,
    population_id: 1,
  };

  review = 8.4;
  total_reviews = 200;
  price = 200;
  company = 'Hotels';
}
