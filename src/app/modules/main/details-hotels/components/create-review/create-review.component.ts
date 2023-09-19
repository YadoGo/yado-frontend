import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '@core/services/review/review.service';
import { selectUserId } from '@core/states/user.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css'],
})
export class CreateReviewComponent {
  @Input() hotelId!: string;
  @Output() closeClicked = new EventEmitter<void>();
  userId$!: string;

  reviewForm: FormGroup;
  rating = 0;
  isSubmitFormValid = false;

  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private store: Store,
  ) {
    this.store.select(selectUserId).subscribe((userId: string) => {
      if (userId) {
        this.userId$ = userId;
      }
    });

    this.reviewForm = this.fb.group({
      rating: [
        0,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
          Validators.pattern(/^\d+(\.\d{1})?$/),
        ],
      ],
      positiveComment: ['', [Validators.required, Validators.maxLength(500)]],
      negativeComment: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  decrementRating() {
    if (this.rating > 0) {
      this.rating--;
    }
  }

  incrementRating() {
    if (this.rating < 10) {
      this.rating++;
    }
  }

  submitForm() {
    if (this.reviewForm.valid) {
      const reviewCreate = {
        qualification: this.reviewForm.value.rating,
        positiveComment: this.reviewForm.value.positiveComment,
        negativeComment: this.reviewForm.value.negativeComment,
        userId: this.userId$,
        hotelId: this.hotelId,
      };

      this.reviewService.createReview(reviewCreate).subscribe(
        () => {
          console.log('Review Successfully');
          this.isSubmitFormValid = true;
          setTimeout(() => {
            this.closeClicked.emit();
          }, 4000);
        },
        (error) => {
          console.error('Error:', error);
        },
      );
    }
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
  }
}
