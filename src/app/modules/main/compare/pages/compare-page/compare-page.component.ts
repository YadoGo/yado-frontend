import { Component } from '@angular/core';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css'],
})
export class ComparePageComponent {
  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  hotels: Hotel[] = [
    {
      name: 'Hotel sample',
      price: '$100',
      attributes: this.generateAttributes(),
      imageUrl: 'https://via.placeholder.com/150',
      isExpanded: false,
    },
  ];

  addHotel(): void {
    if (this.hotels.length < 4) {
      this.hotels.push({
        name: `Hotel ${this.hotels.length + 1}`,
        price: '$100',
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
      { text: 'Outdoor swimming pool' },
      { text: 'Free WiFi' },
      { text: 'Free parking' },
      { text: 'Breakfast and dinner included with stay' },
      { text: 'Gym' },
      { text: 'Spa' },
      { text: '24/7 room service' },
      { text: 'Rooftop bar' },
      { text: 'Flat-screen TV in each room' },
      { text: 'Free airport shuttle' },
    ];
  }
}

interface HotelAttribute {
  text: string;
}

export interface Hotel {
  name: string;
  price: string;
  attributes: HotelAttribute[];
  imageUrl: string;
  isExpanded: boolean;
}
