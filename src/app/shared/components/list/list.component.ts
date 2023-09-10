import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  hotels = [];

  currentPage = 1;
  hotelsPerPage = 15;
  totalHotels!: number;
}
