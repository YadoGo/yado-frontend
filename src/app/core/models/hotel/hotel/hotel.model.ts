import {
  Favorite,
  Image,
  Owner,
  Parameter,
  Population,
  Review,
  Site,
} from '@core/models';

export interface Hotel {
  id: string;
  name: string;
  description: string;
  stars: number;
  address: string;
  latitude: number;
  longitude: number;
  numVisited: number;
  populationId: number;
  population: Population;
  parameter: Parameter;
  owners: Owner;
  favorites: Favorite[];
  reviews: Review[];
  images: Image[];
  sites: Site[];
}
