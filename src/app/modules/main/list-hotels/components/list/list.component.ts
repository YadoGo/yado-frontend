import { Component } from '@angular/core';
import { Hotel } from '@core/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  hotels: Hotel[] = [
    {
      uuid: '1',
      name: 'Hotel Barcelona Beachfront',
      description: 'A luxurious hotel with stunning beach views.',
      stars: 3,
      address: '123 Beach Ave, Barcelona',
      latitude: 41.3866,
      longitude: 2.1676,
      num_visited: 250,
      population_id: 1,
    },
    {
      uuid: '2',
      name: 'Urban Oasis Hotel',
      description: 'Experience tranquility in the heart of the city.',
      stars: 4,
      address: '456 Serenity St, Barcelona',
      latitude: 41.3833,
      longitude: 2.1700,
      num_visited: 150,
      population_id: 2,
    },
  ];

}
