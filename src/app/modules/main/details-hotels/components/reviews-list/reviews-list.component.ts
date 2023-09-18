import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Review } from '@core/models';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css'],
})
export class ReviewsListComponent implements OnChanges {
  @Input() reviews: Review[] = [];
  hasReviews = false;
  isReviewModalOpen = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['reviews'] && changes['reviews'].currentValue) {
      this.hasReviews = this.reviews.length > 0;
    }
  }

  openReviewModal() {
    this.isReviewModalOpen = true;
  }

  closeReviewModal() {
    this.isReviewModalOpen = false;
  }
}
