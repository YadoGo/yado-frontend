import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-manager-page',
  templateUrl: './hotel-manager-page.component.html',
  styleUrls: ['./hotel-manager-page.component.css'],
})
export class HotelManagerPageComponent implements OnInit {
  isDashboardRoute = false;
  isHotelsRoute = false;
  isReviewsRoute = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe((segments) => {
      const currentRoute = segments.join('/');

      this.isDashboardRoute = currentRoute === 'owner';
      this.isHotelsRoute = currentRoute === 'owner/hotels';
      this.isReviewsRoute = currentRoute === 'owner/reviews';
    });
  }
}
