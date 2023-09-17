import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '@core/models';
import { ReviewService } from '@core/services/review/review.service';
import { FavoriteService } from '@core/services/favorite/favorite.service';
import { selectUserId } from '@core/states/user.selectors';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.css'],
})
export class CardHotelComponent implements OnInit {
  @Input() hotel!: Hotel;
  reviewCount!: number;
  averageRating!: string;
  userId: string | undefined;
  price = 0;
  isFavorite = false;

  constructor(
    private router: Router,
    private store: Store,
    private reviewService: ReviewService,
    private favoriteService: FavoriteService,
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

    console.log('Toggling favorite for hotelId:', this.hotel.id);

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
    const nameHotel = this.hotel.name;
    this.router.navigate(['/hotels', 'city', nameHotel]);
  }
}
