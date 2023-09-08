import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-list-hotels-page',
  templateUrl: './list-hotels-page.component.html',
  styleUrls: ['./list-hotels-page.component.css'],
})
export class ListHotelsPageComponent {
  city = 'Barcelona';
  country = 'Spain';

  isFiltersExpanded = false;
  isSortExpanded = false;
  isOpenMap = false;

  constructor() {
    this.checkWindowWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowWidth();
  }

  checkWindowWidth() {
    this.isFiltersExpanded = window.innerWidth >= 1024;
  }

  toggleFilters() {
    this.isFiltersExpanded = !this.isFiltersExpanded;
  }

  toggleSort() {
    this.isSortExpanded = !this.isSortExpanded;
  }
  receiveChangeMap(value: boolean) {
    this.isOpenMap = value;
  }
}
