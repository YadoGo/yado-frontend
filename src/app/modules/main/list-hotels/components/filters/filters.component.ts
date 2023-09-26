import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Output() isOpenMapChange = new EventEmitter<boolean>();
  @Output() filtersChanged = new EventEmitter<any>();

  isOpenMap = false;
  mapButtonText = 'Open Map';
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      BicycleRental: false,
      Solarium: false,
      GolfCourse: false,
      Massage: false,
      FitnessCentre: false,
      FreeCancellation: false,
      SelfCatering: false,
      BreakfastIncluded: false,
      BreakfastDinnerIncluded: false,
      TwinBeds: false,
      DoubleBed: false,
      LargeDoubleBed: false,
      ExtraLargeDoubleBed: false,
      NonSmokingRooms: false,
      Parking: false,
      VeryGoodWifi: false,
      FamilyRooms: false,
      SwimmingPool: false,
      RoomService: false,
      PetsAllowed: false,
      FacilitesDisabledGuest: false,
      SpaWellnessCentre: false,
      AeroportSchuttle: false,
      Restaurant: false,
      ReceptionAlwaysOpen: false,
      Kitchen: false,
      PrivateBathroom: false,
      AirConditioning: false,
      LaptopFriendlyWorkspace: false,
      Bath: false,
      PrivatePool: false,
      Terrace: false,
      Balcony: false,
      BlatScreenTv: false,
      WashingMachine: false,
      Patio: false,
      Soundproofing: false,
      ViewHotel: false,
      SeaView: false,
      WheelchairAccessible: false,
      ToiletGrabRails: false,
      HigherLevelToilet: false,
      LowerBathroomSink: false,
      EmergencyCordBathroom: false,
      VisualAidsBraille: false,
      VisualAidsTactileSigns: false,
    });
  }

  toggleOpenMap() {
    this.isOpenMap = !this.isOpenMap;
    this.isOpenMapChange.emit(this.isOpenMap);

    this.mapButtonText = this.isOpenMap ? 'Close Map' : 'Open Map';
  }

  applyFilters() {
    const filters = this.filterForm.value;
    this.filtersChanged.emit(filters);
  }
}
