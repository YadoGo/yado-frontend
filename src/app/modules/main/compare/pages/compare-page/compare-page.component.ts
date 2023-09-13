import { Component } from '@angular/core';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css'],
})
export class ComparePageComponent {
  hotels: Hotel[] = [
    {
      name: 'Hotel 1',
      attributes: this.generateAttributes(),
      imageUrl: 'https://via.placeholder.com/150',
      isExpanded: false,
    },
  ];

  addHotel(): void {
    if (this.hotels.length < 4) {
      this.hotels.push({
        name: `Hotel ${this.hotels.length + 1}`,
        attributes: this.generateAttributes(),
        imageUrl: 'https://via.placeholder.com/150',
        isExpanded: false,
      });
    }
  }

  deleteHotel(index: number): void {
    this.hotels.splice(index, 1);
  }

  toggleExpand(index: number): void {
    this.hotels[index].isExpanded = !this.hotels[index].isExpanded;
  }

  generateAttributes(): HotelAttribute[] {
    return [
      { text: 'Piscina al aire libre', isBetter: this.randomBetter() },
      { text: 'WiFi gratuito', isBetter: this.randomBetter() },
      { text: 'Estacionamiento gratuito', isBetter: this.randomBetter() },
      { text: 'Desayuno incluido', isBetter: this.randomBetter() },
      { text: 'Gimnasio', isBetter: this.randomBetter() },
      { text: 'Spa', isBetter: this.randomBetter() },
      { text: 'Servicio de habitación 24/7', isBetter: this.randomBetter() },
      { text: 'Bar en la azotea', isBetter: this.randomBetter() },
      {
        text: 'TV de pantalla plana en cada habitación',
        isBetter: this.randomBetter(),
      },
      {
        text: 'Transporte al aeropuerto gratuito',
        isBetter: this.randomBetter(),
      },
    ];
  }

  randomBetter(): boolean {
    return Math.random() > 0.5;
  }
}

interface HotelAttribute {
  text: string;
  isBetter: boolean;
}

export interface Hotel {
  name: string;
  attributes: HotelAttribute[];
  imageUrl: string;
  isExpanded: boolean;
}
