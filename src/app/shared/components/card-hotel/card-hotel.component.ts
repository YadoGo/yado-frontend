import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectUserId } from '@core/states/user.selectors';
import { ReviewService } from '@core/services/review/review.service';
import { FavoriteService } from '@core/services/favorite/favorite.service';
import { SearchService } from '@core/services/search/search.service';
import { HotelSummary } from '@core/models';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.css'],
})
export class CardHotelComponent implements OnInit {
  @Input() hotel!: HotelSummary;
  reviewCount = 0;
  averageRating = 0;
  userId: string | undefined;
  price = 0;
  isFavorite!: boolean;
  cityName!: string;

  constructor(
    private router: Router,
    private store: Store,
    private reviewService: ReviewService,
    private favoriteService: FavoriteService,
    private searchService: SearchService,
  ) {
    this.store.select(selectUserId).subscribe((userId) => {
      this.userId = userId;
    });
  }

  ngOnInit() {
    if (this.userId) {
      this.favoriteService
        .checkIfFavoriteExists(this.userId, this.hotel.id)
        .pipe(take(1))
        .subscribe((favorite) => {
          this.isFavorite = favorite.exists;
        });
    }

    this.reviewService
      .getReviewCountByHotelId(this.hotel.id)
      .subscribe((count) => {
        this.reviewCount = count;
      });

    this.reviewService
      .getAverageRatingByHotelId(this.hotel.id)
      .subscribe((rating) => {
        this.averageRating = rating;
      });
  }

  toggleFavorite() {
    if (!this.userId) {
      this.router.navigate(['/auth/login']);
      return;
    }

    if (this.isFavorite) {
      this.favoriteService
        .removeFavorites({ userId: this.userId, hotelId: this.hotel.id })
        .subscribe(
          () => {
            this.isFavorite = false;
            console.log('Hotel removed from favorites.');
          },
          (error) => {
            console.error('Error removing favorite:', error);
          },
        );
    } else {
      this.favoriteService
        .addToFavorites({ userId: this.userId, hotelId: this.hotel.id })
        .subscribe(
          () => {
            this.isFavorite = true;
            console.log('Hotel added to favorites.');
          },
          (error) => {
            console.error('Error adding favorite:', error);
          },
        );
    }
  }

  handleImageError(event: any) {
    event.target.src =
      'https://www.idsplus.net/wp-content/uploads/default-placeholder.png';
  }

  redirectToHotelDetails() {
    this.searchService.getPopulationNameById(this.hotel.populationId).subscribe(
      (response) => {
        if (response) {
          this.cityName = response;
          this.router.navigate(['/hotels', this.cityName, this.hotel.id]);
        } else {
          console.error('Error: No response from server');
        }
      },
      (error) => {
        console.error('Error al obtener datos de población:', error);
      },
    );
  }
}
