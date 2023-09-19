import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewUpdate } from '@core/models';
import { ReviewService } from '@core/services/review/review.service';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css'],
})
export class UpdateReviewComponent {
  @Input() set reviewId(id: string) {
    if (id) {
      this.loadReviewDetails(id);
    }
  }
  @Output() closeEditClicked = new EventEmitter<boolean>();

  reviewIdBase!: string;
  reviewForm: FormGroup;
  rating = 0;
  isSubmitFormValid = false;

  constructor(
    private formBuilder: FormBuilder,
    private reviewService: ReviewService,
  ) {
    this.reviewForm = this.formBuilder.group({
      rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      positiveComment: ['', [Validators.maxLength(200)]],
      negativeComment: ['', [Validators.maxLength(200)]],
    });
  }

  loadReviewDetails(reviewId: string) {
    this.reviewService.getReviewById(reviewId).subscribe(
      (reviewDetails) => {
        if (reviewDetails) {
          this.reviewIdBase = reviewId;

          this.reviewForm.patchValue({
            rating: reviewDetails.qualification,
            positiveComment: reviewDetails.positiveComment,
            negativeComment: reviewDetails.negativeComment,
          });
        }
      },
      (error) => {
        console.error('Error:', error);
      },
    );
  }

  incrementRating() {
    if (this.rating < 10) {
      this.rating++;
      this.reviewForm.get('rating')?.setValue(this.rating);
    }
  }

  decrementRating() {
    if (this.rating > 0) {
      this.rating--;
      this.reviewForm.get('rating')?.setValue(this.rating);
    }
  }

  submitForm() {
    if (this.reviewForm.valid) {
      const formValue = this.reviewForm.value;

      const formData: ReviewUpdate = {
        qualification: +formValue.rating,
        positiveComment: formValue.positiveComment,
        negativeComment: formValue.negativeComment,
      };

      this.reviewService.updateReview(this.reviewIdBase, formData).subscribe(
        () => {
          this.closeEditClicked.emit(true);
        },
        (error) => {
          console.error('Error update review:', error);
        },
      );
    }
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.submitForm();
  }
}
