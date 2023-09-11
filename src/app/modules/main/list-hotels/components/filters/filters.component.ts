import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Output() isOpenMapChange = new EventEmitter<boolean>();
  isOpenMap = false;
  mapButtonText = 'Open Map';

  toggleOpenMap() {
    this.isOpenMap = !this.isOpenMap;
    this.isOpenMapChange.emit(this.isOpenMap);

    this.mapButtonText = this.isOpenMap ? 'Close Map' : 'Open Map';
  }
}
