import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-content-map',
  templateUrl: './popup-content-map.component.html',
  styleUrls: ['./popup-content-map.component.css'],
})
export class PopupContentMapComponent {
  @Input() hotelData!: {
    imagePath: string;
    name: string;
    stars: number;
  };
}
