import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardHotelComponent, FooterComponent, NavBarComponent, SearchComponent } from './components';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent,
    SearchComponent,
    FooterComponent,
    CardHotelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavBarComponent,
    SearchComponent,
    FooterComponent,
    CardHotelComponent
  ]
})
export class SharedModule { }
