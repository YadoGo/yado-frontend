import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReviewService } from 'src/app/core/services/review/review.service';
import { FavoriteService } from 'src/app/core/services/favorite/favorite.service';

import {
  selectUsername,
  selectUserFirstName,
  selectUserLastName,
  selectUserProfileImage,
  selectUserId,
} from 'src/app/core/states/user.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  username$!: Observable<string>;
  firstName$!: Observable<string>;
  lastName$!: Observable<string>;
  userProfileImage$!: Observable<string>;
  userId$!: Observable<string>;
  reviews$!: Observable<any>;
  favorites$!: Observable<any>;

  constructor(
    private store: Store,
    private reviewService: ReviewService,
    private favoriteService: FavoriteService,
  ) {}
  ngOnInit(): void {
    this.userId$ = this.store.select(selectUserId);

    this.userId$.subscribe((userId) => {
      if (userId) {
        this.reviews$ = this.reviewService.getReviewsByUserId(userId);
        this.favorites$ =
          this.favoriteService.getFavoriteHotelsByUserId(userId);
      }
    });

    this.username$ = this.store.select(selectUsername);
    this.firstName$ = this.store.select(selectUserFirstName);
    this.lastName$ = this.store.select(selectUserLastName);
    this.userProfileImage$ = this.store.select(selectUserProfileImage);
    this.userId$ = this.store.select(selectUserId);
  }
}
