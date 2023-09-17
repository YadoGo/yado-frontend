import { Component, OnInit } from '@angular/core';
import { Hotel } from '@core/models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HotelService } from '@core/services/hotel/hotel.service';

@Component({
  selector: 'app-details-hotels-page',
  templateUrl: './details-hotels-page.component.html',
  styleUrls: ['./details-hotels-page.component.css'],
})
export class DetailsHotelsPageComponent implements OnInit {
  hotelId: string | null = null;
  hotel!: Hotel;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
  ) {}

  ngOnInit() {
    // Utiliza ActivatedRoute para obtener el hotelId de la URL
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.hotelId = params.get('hotel-id');
      if (this.hotelId) {
        this.hotelService.getHotelById(this.hotelId).subscribe((hotel) => {
          this.hotel = hotel;
          console.log(hotel);
        });
      }
    });
  }
}
