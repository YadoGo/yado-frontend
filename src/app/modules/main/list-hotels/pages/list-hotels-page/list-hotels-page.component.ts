import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelSummary } from '@core/models';
import { HotelService } from '@core/services/hotel/hotel.service';
import { SearchService } from '@core/services/search/search.service';

@Component({
  selector: 'app-list-hotels-page',
  templateUrl: './list-hotels-page.component.html',
  styleUrls: ['./list-hotels-page.component.css'],
})
export class ListHotelsPageComponent implements OnInit {
  countryName!: string;
  hotels?: HotelSummary[];
  countryId?: number;

  isFiltersExpanded = false;
  isSortExpanded = false;
  isOpenMap = false;
  isValidCountry = true;

  hotelsArrayMapped: any[] = []; // Definimos la nueva propiedad aquí

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private searchService: SearchService,
  ) {
    this.checkWindowWidth();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const formattedName = this.formatCountryName(params['city']);
      this.countryName = formattedName;

      this.searchService.searchCities(formattedName).subscribe((results) => {
        if (results.length > 0) {
          const country = results[0];
          this.countryId = country.id;

          if (this.countryId) {
            this.hotelService
              .getHotelsByPopulationId(this.countryId, 1, 15)
              .subscribe((data) => {
                this.hotels = data;

                // Aquí mapeamos los datos de los hoteles al formato correcto
                this.hotelsArrayMapped = data.map((hotel: HotelSummary) => ({
                  lat: hotel.latitude,
                  lon: hotel.longitude,
                  name: hotel.name,
                }));

                console.log(this.hotels);
              });
          }
        } else {
          this.isValidCountry = false;
        }
      });
    });
  }

  formatCountryName(name: string): string {
    return name.replace(/%20/g, ' ');
  }

  getCountryIdFromName(name: string): number {
    return parseInt(name, 10);
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
