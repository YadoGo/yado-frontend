import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { HotelService } from '@core/services/hotel/hotel.service';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Style, Icon, Text, Fill } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Overlay from 'ol/Overlay';

@Component({
  selector: 'app-map-hotels',
  templateUrl: './map-hotels.component.html',
  styleUrls: ['./map-hotels.component.css'],
})
export class MapHotelsComponent implements OnInit {
  @Input() styleConfig: 'userProfile' | 'hotelList' | 'hotelDetail' =
    'userProfile';

  private popup!: Overlay;

  hotels: {
    lat: number;
    lon: number;
    price: string;
    stars: number;
    name: string;
    id: number;
  }[] = [];

  private map!: Map;

  constructor(
    private elementRef: ElementRef,
    private hotelService: HotelService,
  ) {}

  ngOnInit() {
    console.log('styleConfig:', this.styleConfig);

    this.hotelService.getHotels().subscribe(
      (data) => {
        this.hotels = data;
        this.initMap();
        this.addMarkers();
      },
      (error) => {
        console.error('Error fetching hotel data', error);
      },
    );
  }

  private initMap(): void {
    this.map = new Map({
      target: this.elementRef.nativeElement.querySelector('#map'),
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://api.mapbox.com/styles/v1/janplata/clm3ropfn00tv01qx3ee02ubw/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFucGxhdGEiLCJhIjoiY2xtM3J0dXEwMXA0dzNlbjE4YmthMDE2OCJ9.YvA-1dKDb10ho38g5iH7nA',
            crossOrigin: 'anonymous',
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([2.1734, 41.3851]),
        zoom: 12,
        maxZoom: 18,
        minZoom: 11,
      }),
      controls: [],
    });

    this.popup = new Overlay({
      element: document.getElementById('popup')!,
      autoPan: true,
      offset: [-35, -100],
    });
    this.map.addOverlay(this.popup);
    this.map.on('pointermove', this.showPopup.bind(this));
  }

  private showPopup(event: any): void {
    let foundHotel;
    this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
      const geometry = feature.getGeometry();
      if (geometry instanceof Point) {
        const coordinates = geometry.getCoordinates();
        const hotel = this.hotels.find((hotel) => {
          const hotelCoordinates = fromLonLat([hotel.lon, hotel.lat]);
          return (
            hotelCoordinates[0] === coordinates[0] &&
            hotelCoordinates[1] === coordinates[1]
          );
        });

        if (hotel) {
          foundHotel = hotel;
          const popupElement = this.popup.getElement() as HTMLElement;

          while (popupElement.firstChild) {
            popupElement.firstChild.remove();
          }

          const popupContent = document.createElement('div');
          popupContent.className = 'popup p-2 rounded bg-gray-800 text-white';

          const hotelName = document.createElement('p');
          hotelName.className = 'text-sm';
          hotelName.textContent = hotel.name;

          const hotelStars = document.createElement('p');
          hotelStars.className = 'text-xs';
          hotelStars.textContent = `Stars: ${hotel.stars}`;

          popupContent.appendChild(hotelName);
          popupContent.appendChild(hotelStars);

          popupElement.appendChild(popupContent);

          this.popup.setPosition(coordinates);
        }
      }
    });

    if (!foundHotel) {
      this.popup.setPosition(undefined);
    }
  }

  private addMarkers(): void {
    const features = this.hotels.map((hotel) => {
      const marker = new Feature({
        geometry: new Point(fromLonLat([hotel.lon, hotel.lat])),
      });
      marker.setStyle(this.createHotelStyle(hotel.price));
      return marker;
    });

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: features,
      }),
    });

    this.map.addLayer(vectorLayer);
  }

  private createHotelStyle(price: string): Style {
    return new Style({
      image: new Icon({
        src: 'assets/images/map/number_marker.png',
        scale: 0.1,
        anchor: [0.2, 1],
      }),
      text: new Text({
        text: price,
        offsetY: -23,
        offsetX: 17,
        fill: new Fill({ color: 'white' }),
        font: 'bold 14px Arial',
      }),
    });
  }
}
