import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule } from '@angular/material/dialog';

import {
  AuthLayoutComponent,
  LoginPageComponent,
  RegisterPageComponent,
} from './auth';
import {
  HeroComponent,
  CtaMapComponent,
  HomePageComponent,
  PopularDestinationComponent,
} from './main/home';
import { MainLayoutComponent } from './main/layouts';
import { AboutPageComponent } from './main/about';
import { ComparePageComponent } from './main/compare';
import { TopHotelsPageComponent } from './main/top-hotels';
import {
  FiltersComponent,
  ListComponent,
  ListHotelsPageComponent,
  MapHotelsComponent,
} from './main/list-hotels';
import {
  DetailsHotelsPageComponent,
  ImagesHotelComponent,
} from './main/details-hotels';
import { AvailableRatesComponent } from './main/details-hotels/components/available-rates';
import { HotelDetailsPopupComponent } from './main/top-hotels/components/hotel-details-popup/hotel-details-popup.component';
import {
  ProfileSettingsPageComponent,
  ConfirmDeleteComponent,
  SuccessfullyUploadedComponent,
} from './main/profile-settings';
import { ErrorUploadedComponent } from './main/profile-settings/components/error-uploaded/error-uploaded.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    HeroComponent,
    PopularDestinationComponent,
    MainLayoutComponent,
    AboutPageComponent,
    CtaMapComponent,
    ComparePageComponent,
    TopHotelsPageComponent,
    ListHotelsPageComponent,
    FiltersComponent,
    ListComponent,
    MapHotelsComponent,
    DetailsHotelsPageComponent,
    ImagesHotelComponent,
    AvailableRatesComponent,
    HotelDetailsPopupComponent,
    ProfileSettingsPageComponent,
    ConfirmDeleteComponent,
    SuccessfullyUploadedComponent,
    ErrorUploadedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    StoreModule.forFeature('auth', {}),
  ],
})
export class ModulesModule {}
