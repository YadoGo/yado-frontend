import { Component, Input } from '@angular/core';
import { Hotel } from '@core/models';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.css']
})
export class CardHotelComponent {
  @Input() hotel!: Hotel;

  number = 9.4;
  price = 0;
  heartHover = false;

  toggleHeart() {
    this.heartHover = !this.heartHover;
  }

}
