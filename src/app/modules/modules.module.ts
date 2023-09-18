import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { QRCodeModule } from 'angularx-qrcode';
import { ClipboardModule } from '@angular/cdk/clipboard';

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
import { ChampionsPageComponent } from './main/champions';
import { FiltersComponent, ListHotelsPageComponent } from './main/list-hotels';
import {
  DetailsHotelsPageComponent,
  ImagesHotelComponent,
  SharedHotelComponent,
} from './main/details-hotels';
import { AvailableRatesComponent } from './main/details-hotels/components/available-rates';
import {
  ProfileSettingsPageComponent,
  ConfirmDeleteComponent,
  UserRoleRequestComponent,
  DeleteAccountComponent,
  EditAccountComponent,
  ChangePasswordComponent,
  ProfileSettingsService,
} from './main/profile-settings';
import {
  DashboardComponent,
  HotelManagerPageComponent,
  HotelsManagerComponent,
  StatsComponent,
} from './main/hotel-manager';
import { AdminDashboardPageComponent } from './main/admin-dashboard';
import { UserProfileComponent } from './main/user-profile';
import { ReviewsListComponent } from './main/details-hotels/components/reviews-list/reviews-list.component';
import { CreateReviewComponent } from './main/details-hotels/components/create-review/create-review.component';

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
    ListHotelsPageComponent,
    FiltersComponent,
    DetailsHotelsPageComponent,
    ImagesHotelComponent,
    AvailableRatesComponent,
    ProfileSettingsPageComponent,
    ConfirmDeleteComponent,
    HotelManagerPageComponent,
    AdminDashboardPageComponent,
    DashboardComponent,
    StatsComponent,
    HotelsManagerComponent,
    UserRoleRequestComponent,
    DeleteAccountComponent,
    EditAccountComponent,
    ChangePasswordComponent,
    UserProfileComponent,
    ChampionsPageComponent,
    SharedHotelComponent,
    ReviewsListComponent,
    CreateReviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    ClipboardModule,
    StoreModule.forFeature('auth', {}),
  ],
  providers: [ProfileSettingsService],
})
export class ModulesModule {}
