import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-details-popup',
  templateUrl: './hotel-details-popup.component.html',
  styleUrls: ['./hotel-details-popup.component.css'],
})
export class HotelDetailsPopupComponent {
  @Input() hotel: any;
  @Output() closePopup = new EventEmitter<void>();

  // Método para cerrar el popup
  onClosePopup(): void {
    this.closePopup.emit();
  }

  generateStars(rating: number): string {
    const maxStars = 5;
    const ratingPercentage = (rating / 10) * 100;
    const fullStars = Math.round((ratingPercentage / 100) * maxStars);

    return '⭐️'.repeat(fullStars) + '✩'.repeat(maxStars - fullStars);
  }
}
