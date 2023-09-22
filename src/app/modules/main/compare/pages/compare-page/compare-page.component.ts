import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css'],
})
export class ComparePageComponent {
  isModalOpen = false;
  searchQuery = '';
  filteredHotels: any[] = [];

  filterHotels() {
    this.filteredHotels = this.availableHotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
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

  availableHotels: Hotel[] = [
    {
      name: 'Hotel Arts',
      price: '6603€',
      attributes: this.generateAttributes(),
      imageUrl:
        'https://q-xx.bstatic.com/xdata/images/hotel/max250/442673023.jpg?k=5776ad76c227d4d64ced54b543b0cde36c704b2da590ccea6ef4ef4f6022e89c&o=',
      isExpanded: false,
    },
    {
      name: 'Hotel Vela',
      price: '1203€',
      attributes: this.generateAttributes(),
      imageUrl:
        'https://q-xx.bstatic.com/xdata/images/hotel/max250/439254619.jpg?k=ed925afa9e137e370c02a9819598354034159f0daab165864c9db2b14a0600ee&o=',
      isExpanded: false,
    },
    {
      name: 'Casa Fuster',
      price: '380€',
      attributes: this.generateAttributes(),
      imageUrl:
        'https://q-xx.bstatic.com/xdata/images/hotel/max250/346552875.jpg?k=267d66fe0cf5c79fb533d9f3b546efd93efe737ea78a9fe864268beed0b64c48&o=',
      isExpanded: false,
    },
    {
      name: 'InterContinent',
      price: '464€',
      attributes: this.generateAttributes(),
      imageUrl:
        'https://q-xx.bstatic.com/xdata/images/hotel/max250/331865285.jpg?k=62f23af372983184225cf4b87befa987773eb57dfaf0d8a79408c6841b6825f3&o=',
      isExpanded: false,
    },
    {
      name: 'Barceló Sants',
      price: '131€',
      attributes: this.generateAttributes(),
      imageUrl:
        'https://cf.bstatic.com/xdata/images/hotel/square200/187430658.webp?k=691bc3ad1ac195f141fa9ecb4b239dd64f0a48e968c9e323b6bde04c1c0828be&o=',
      isExpanded: false,
    },
    {
      name: 'Hotel Sant Pau',
      price: '94€',
      attributes: this.generateAttributes(),
      imageUrl:
        'https://cf.bstatic.com/xdata/images/hotel/square200/398565444.webp?k=1eba60fb23bb8d5def8308daaf6cb715c6243d0a6cb98f72113fbd8b5f213400&o=',
      isExpanded: false,
    },
    {
      name: 'Vincci Bit',
      price: '120€',
      attributes: this.generateAttributes(),
      imageUrl:
        'https://cf.bstatic.com/xdata/images/hotel/square200/86931938.webp?k=7a73ef56954c89badca6124a1169514c1f1ba8183c64a136838d05999e706be8&o=',
      isExpanded: false,
    },
  ];

  onSearchChange() {
    if (this.searchQuery.length > 3) {
      this.filteredHotels = [...this.availableHotels];
    } else {
      this.filteredHotels = [];
    }
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  addHotel(hotel: Hotel): void {
    if (this.hotels.length === 1 && this.hotels[0].name === 'Hotel sample') {
      this.hotels.splice(0, 1);
    }

    if (this.hotels.length < 4) {
      this.hotels.push(hotel);
      this.closeModal();
    }
  }

  deleteHotel(index: number): void {
    this.hotels.splice(index, 1);
  }

  toggleExpand(index: number): void {
    this.hotels[index].isExpanded = !this.hotels[index].isExpanded;
  }

  generateAttributes(): HotelAttribute[] {
    const allAttributes = [
      { text: 'Outdoor swimming pool' },
      { text: 'Indoor swimming pool' },
      { text: 'Free WiFi' },
      { text: 'Free parking' },
      { text: 'Breakfast and dinner' },
      { text: 'Gym' },
      { text: 'Spa' },
      { text: '24/7 room service' },
      { text: 'Rooftop bar' },
      { text: 'Flat-screen TV' },
      { text: 'Free airport' },
      { text: 'Pet-friendly' },
      { text: 'Indoor fireplace' },
      { text: 'Hot tub' },
      { text: 'Sauna' },
      { text: 'Golf course' },
      { text: 'Tennis court' },
      { text: 'Kids play area' },
      { text: 'Conference rooms' },
      { text: 'Business center' },
      { text: 'Laundry service' },
      { text: 'Minibar in each room' },
      { text: 'Daily housekeeping' },
      { text: 'Concierge service' },
    ];

    return allAttributes.filter(() => Math.random() < 0.65);
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
