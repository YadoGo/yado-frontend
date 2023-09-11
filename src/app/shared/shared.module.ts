import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  CardHotelComponent,
  ErrorMessageComponent,
  FooterComponent,
  ListComponent,
  MapHotelsComponent,
  NavBarComponent,
  PaginationHotelsComponent,
  SearchComponent,
  SideBarComponent,
  SuccessMessageComponent,
} from './components';
import { PopupContentMapComponent } from './components/popup-content-map/popup-content-map.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SearchComponent,
    FooterComponent,
    CardHotelComponent,
    SideBarComponent,
    ListComponent,
    PaginationHotelsComponent,
    ErrorMessageComponent,
    SuccessMessageComponent,
    MapHotelsComponent,
    PopupContentMapComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, NgOptimizedImage],
  exports: [
    NavBarComponent,
    SearchComponent,
    FooterComponent,
    CardHotelComponent,
    SideBarComponent,
    ListComponent,
    PaginationHotelsComponent,
    ErrorMessageComponent,
    SuccessMessageComponent,
    MapHotelsComponent,
    PopupContentMapComponent,
  ],
})
export class SharedModule {}
