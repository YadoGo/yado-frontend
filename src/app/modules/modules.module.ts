import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { AuthLayoutComponent, LoginPageComponent, RegisterPageComponent } from './auth';
import { HeroComponent, CtaMapComponent, HomePageComponent, PopularDestinationComponent } from './main/home';
import { MainLayoutComponent } from './main/layouts';
import { AboutPageComponent } from './main/about';
import { ComparePageComponent } from './main/compare';
import { TopHotelsPageComponent } from './main/top-hotels';
import { FiltersComponent, ListComponent, ListHotelsPageComponent, MapHotelsComponent } from './main/list-hotels';
import { DetailsHotelsPageComponent } from './main/details-hotels';
import { ImagesHotelComponent } from './main/details-hotels/components/images-hotel/images-hotel.component';
import { AvailableRatesComponent } from './main/details-hotels/components/available-rates/available-rates.component';





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
    AvailableRatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class ModulesModule { }
