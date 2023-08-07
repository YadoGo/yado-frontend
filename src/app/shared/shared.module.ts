import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannerComponent, FooterComponent, NavBarComponent, SearchComponent } from './components';



@NgModule({
  declarations: [
    NavBarComponent,
    BannerComponent,
    SearchComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    BannerComponent,
    SearchComponent,
    FooterComponent
  ]
})
export class SharedModule { }
