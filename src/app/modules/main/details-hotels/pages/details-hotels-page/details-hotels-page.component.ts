import { Component, OnInit } from '@angular/core';
import { Hotel } from '@core/models';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HotelService } from '@core/services/hotel/hotel.service';
import { Store } from '@ngrx/store';
import { ReviewService } from '@core/services/review/review.service';
import { FavoriteService } from '@core/services/favorite/favorite.service';
import { selectUserId } from '@core/states/user.selectors';
import { EMPTY, catchError, take } from 'rxjs';

@Component({
  selector: 'app-details-hotels-page',
  templateUrl: './details-hotels-page.component.html',
  styleUrls: ['./details-hotels-page.component.css'],
})
export class DetailsHotelsPageComponent implements OnInit {
  hotelId: string | null = null;
  hotel!: Hotel;
  reviewCount = 0;
  averageRating = 0;
  userId: string | undefined;
  price = 0;
  isFavorite = false;
  isValidHotel = true;
  isSharedHotel = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private reviewService: ReviewService,
    private favoriteService: FavoriteService,
    private hotelService: HotelService,
  ) {
    this.store.select(selectUserId).subscribe((userId) => {
      this.userId = userId;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.hotelId = params.get('hotel-id');
      if (this.hotelId) {
        this.hotelService
          .getHotelById(this.hotelId)
          .pipe(
            catchError((error) => {
              console.error('Error al obtener el hotel:', error);
              this.isValidHotel = false;
              return EMPTY;
            }),
          )
          .subscribe((hotel) => {
            if (!this.isValidHotel) {
              return;
            }

            if (Object.keys(hotel).length === 0) {
              this.isValidHotel = false;
            } else {
              this.hotel = hotel;
              this.isValidHotel = true;
            }

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
          });
      }
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

  shareHotel() {
    this.isSharedHotel = true;
  }

  handleCloseClick() {
    this.isSharedHotel = false;
  }
}
