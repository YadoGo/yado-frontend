import { ImageDto } from '@core/models/image';
import { ParameterDto } from '@core/models/parameter';

export interface HotelSummary {
  id: string;
  name: string;
  description: string;
  stars: number;
  address: string;
  latitude: number;
  longitude: number;
  numVisited: number;
  populationId: number;
  firstImage: ImageDto;
  parameters: ParameterDto;
}
