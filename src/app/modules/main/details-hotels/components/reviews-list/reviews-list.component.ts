import { Component, Input, OnInit } from '@angular/core';
import { ReviewService } from '@core/services/review/review.service';
import { Review, UserDetails } from '@core/models';
import { UserService } from '@core/services/user/user.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { selectUserId } from '@core/states/user.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css'],
})
export class ReviewsListComponent implements OnInit {
  @Input() hotelId!: string;
  userId$!: string;

  isUserLoggedIn = false;
  hasReviews = false;
  isReviewModalOpen = false;
  isEditReviewModalOpen = false;
  reviews: Review[] = [];
  isCurrentUserAuthorMap: { [reviewId: string]: boolean } = {};
  dropdownState: { [reviewId: string]: boolean } = {};
  reviewToEdit!: string;

  constructor(
    private reviewService: ReviewService,
    private userService: UserService,
    private store: Store,
    private router: Router,
  ) {
    this.store.select(selectUserId).subscribe((userId: string) => {
      if (userId) {
        this.userId$ = userId;
      }
    });

    console.log(this.hotelId);
  }

  ngOnInit() {
    this.reviewService.getAllReviewsByHotelId(this.hotelId).subscribe(
      (reviews) => {
        const userDetailRequests = reviews
          .filter((review) => review.userId && !review.user)
          .map((review) => this.userService.getUserDetails(review.userId));

        forkJoin(userDetailRequests).subscribe(
          (userDetails: UserDetails[]) => {
            userDetails.forEach((userDetail, index) => {
              reviews[index].user = userDetail;
              const isCurrentUserAuthor = userDetail.id === this.userId$;

              this.isCurrentUserAuthorMap[reviews[index].id] =
                isCurrentUserAuthor;

              this.dropdownState[reviews[index].id] = false;
            });

            this.reviews = reviews;
            this.hasReviews = reviews.length > 0;
          },
          (error) => {
            console.error('Error fetching user details:', error);
          },
        );
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      },
    );
  }

  openReviewModal() {
    this.isReviewModalOpen = true;
  }

  closeReviewModal() {
    this.isReviewModalOpen = false;
  }

  closeEditReviewModal() {
    this.isEditReviewModalOpen = false;
  }

  redirectToUserProfile(username: string) {
    this.router.navigate(['/user', username]);
  }

  handleOpenReviewModal() {
    if (!this.userId$) {
      this.router.navigate(['/auth/login']);
    } else {
      this.openReviewModal();
    }
  }

  editReview(review: Review) {
    this.reviewToEdit = review.id;
    this.isEditReviewModalOpen = true;
  }

  deleteReview(review: Review) {
    this.reviewService.deleteReviewById(review.id, this.userId$).subscribe(
      () => {
        const index = this.reviews.indexOf(review);
        if (index !== -1) {
          this.reviews.splice(index, 1);
        }
      },
      (error) => {
        console.error('Error:', error);
      },
    );
  }

  toggleDropdown(reviewId: string) {
    this.dropdownState[reviewId] = !this.dropdownState[reviewId];
  }
}
