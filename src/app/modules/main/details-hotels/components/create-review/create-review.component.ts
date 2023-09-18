import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css'],
})
export class CreateReviewComponent {
  @Output() closeClicked = new EventEmitter<void>();
}
