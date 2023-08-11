import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-images-hotel',
  templateUrl: './images-hotel.component.html',
  styleUrls: ['./images-hotel.component.css'],
})
export class ImagesHotelComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  navigateToSlide(slideNumber: number) {
    const currentCityName = this.route.snapshot.paramMap.get('city');
    const currentHotelName = this.route.snapshot.paramMap.get('name-hotel');

    if (currentCityName && currentHotelName) {
      const slideUrl = `hotels/${currentCityName}/${currentHotelName}#img${slideNumber}`;
      this.router.navigateByUrl(slideUrl);
    } else {
      console.log('Número de diapositiva inválido.');
    }
  }
}
