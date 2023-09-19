import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { HotelService } from '@core/services/hotel/hotel.service';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Overlay from 'ol/Overlay';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Style, Icon, Text, Fill } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

@Component({
  selector: 'app-map-hotels',
  templateUrl: './map-hotels.component.html',
  styleUrls: ['./map-hotels.component.css'],
})
export class MapHotelsComponent implements OnInit {
  @Input() size: 'small' | 'large' = 'small';

  hotels: {
    lat: number;
    lon: number;
    price: string;
    stars: number;
    name: string;
    id: number;
  }[] = [];

  hotelData: {
    imagePath: string;
    name: string;
    stars: number;
  } | null = null;

  private map!: Map;
  private popup!: Overlay;
  showPopupContent = false;
  popupContent = '';

  constructor(
    private elementRef: ElementRef,
    private hotelService: HotelService,
  ) {}

  ngOnInit() {
    this.hotelService.getHotels().subscribe(
      (data) => {
        this.hotels = data;
        this.initMap();
        this.addMarkers();

        this.map.on('pointermove', this.showPopup.bind(this));
      },
      (error) => {
        console.error('Error fetching hotel data', error);
      },
    );
  }

  private showPopup(event: any): void {
    this.map.forEachFeatureAtPixel(
      event.pixel,
      (feature) => {
        const geometry = feature.getGeometry();

        if (geometry instanceof Point) {
          const coord = geometry.getCoordinates();

          const hotelData = this.hotels.find((hotel) => {
            const hotelCoord = fromLonLat([hotel.lon, hotel.lat]);
            return hotelCoord[0] === coord[0] && hotelCoord[1] === coord[1];
          });

          if (hotelData) {
            this.hotelData = {
              imagePath: 'assets/images/map/hotel_sample.jpg',
              name: hotelData.name,
              stars: hotelData.stars,
            };
            this.showPopupContent = true;
            this.popup.setPosition(coord);
          } else {
            this.showPopupContent = false;
          }
        }
      },
      {
        hitTolerance: 1,
      },
    );

    if (!this.map.hasFeatureAtPixel(event.pixel)) {
      this.showPopupContent = false;
    }
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
      element: this.elementRef.nativeElement.querySelector('#popup'),
      positioning: 'bottom-center',
      stopEvent: false,
    });
    this.map.addOverlay(this.popup);
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
