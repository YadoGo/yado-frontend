import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-hotels',
  templateUrl: './pagination-hotels.component.html',
  styleUrls: ['./pagination-hotels.component.css'],
})
export class PaginationHotelsComponent {
  @Input() currentPage!: number;
  @Input() totalHotels!: number;
}
