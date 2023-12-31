import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CardHotelComponent,
  ErrorMessageComponent,
  FooterComponent,
  ListComponent,
  MapHotelsComponent,
  NavBarComponent,
  NotFoundComponent,
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
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
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
    NotFoundComponent,
  ],
})
export class SharedModule {}
