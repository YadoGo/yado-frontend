import { Parameter } from './parameter.model';

describe('Parameter', () => {
  it('should create an instance', () => {
    const parameter: Parameter = {
      bicycleRental: true,
      solarium: false,
      golfCourse: true,
      massage: false,
      fitnessCentre: true,
      freeCancellation: false,
      selfCatering: true,
      breakfastIncluded: false,
      breakfastDinnerIncluded: true,
      twinBeds: false,
      doubleBed: true,
      largeDoubleBed: false,
      extraLargeDoubleBed: true,
      nonSmokingRooms: false,
      parking: true,
      veryGoodWifi: false,
      familyRooms: true,
      swimmingPool: false,
      roomService: true,
      petsAllowed: false,
      facilitesDisabledGuest: true,
      spaWellnessCentre: false,
      aeroportSchuttle: true,
      restaurant: false,
      receptionAlwaysOpen: true,
      kitchen: false,
      privateBathroom: true,
      airConditioning: false,
      laptopFriendlyWorkspace: true,
      bath: false,
      privatePool: true,
      terrace: false,
      balcony: true,
      blatScreenTv: false,
      washingMachine: true,
      patio: false,
      soundproofing: true,
      viewHotel: false,
      seaView: true,
      wheelchairAccessible: false,
      toiletGrabRails: true,
      higherLevelToilet: false,
      lowerBathroomSink: true,
      emergencyCordBathroom: false,
      visualAidsBraille: true,
      visualAidsTactileSigns: false,
      hotelId: '12345',
    };

    expect(parameter).toBeTruthy();
  });

  it('should have valid boolean properties', () => {
    const parameter: Parameter = {
      bicycleRental: true,
      solarium: false,
      golfCourse: true,
      massage: false,
      fitnessCentre: true,
      freeCancellation: false,
      selfCatering: true,
      breakfastIncluded: false,
      breakfastDinnerIncluded: true,
      twinBeds: false,
      doubleBed: true,
      largeDoubleBed: false,
      extraLargeDoubleBed: true,
      nonSmokingRooms: false,
      parking: true,
      veryGoodWifi: false,
      familyRooms: true,
      swimmingPool: false,
      roomService: true,
      petsAllowed: false,
      facilitesDisabledGuest: true,
      spaWellnessCentre: false,
      aeroportSchuttle: true,
      restaurant: false,
      receptionAlwaysOpen: true,
      kitchen: false,
      privateBathroom: true,
      airConditioning: false,
      laptopFriendlyWorkspace: true,
      bath: false,
      privatePool: true,
      terrace: false,
      balcony: true,
      blatScreenTv: false,
      washingMachine: true,
      patio: false,
      soundproofing: true,
      viewHotel: false,
      seaView: true,
      wheelchairAccessible: false,
      toiletGrabRails: true,
      higherLevelToilet: false,
      lowerBathroomSink: true,
      emergencyCordBathroom: false,
      visualAidsBraille: true,
      visualAidsTactileSigns: false,
      hotelId: '12345',
    };

    expect(typeof parameter.bicycleRental).toBe('boolean');
    expect(typeof parameter.solarium).toBe('boolean');
    expect(typeof parameter.golfCourse).toBe('boolean');
    expect(typeof parameter.massage).toBe('boolean');
    expect(typeof parameter.fitnessCentre).toBe('boolean');
    expect(typeof parameter.freeCancellation).toBe('boolean');
    expect(typeof parameter.selfCatering).toBe('boolean');
    expect(typeof parameter.breakfastIncluded).toBe('boolean');
    expect(typeof parameter.breakfastDinnerIncluded).toBe('boolean');
    expect(typeof parameter.twinBeds).toBe('boolean');
    expect(typeof parameter.doubleBed).toBe('boolean');
    expect(typeof parameter.largeDoubleBed).toBe('boolean');
    expect(typeof parameter.extraLargeDoubleBed).toBe('boolean');
    expect(typeof parameter.nonSmokingRooms).toBe('boolean');
    expect(typeof parameter.parking).toBe('boolean');
    expect(typeof parameter.veryGoodWifi).toBe('boolean');
    expect(typeof parameter.familyRooms).toBe('boolean');
    expect(typeof parameter.swimmingPool).toBe('boolean');
    expect(typeof parameter.roomService).toBe('boolean');
    expect(typeof parameter.petsAllowed).toBe('boolean');
    expect(typeof parameter.facilitesDisabledGuest).toBe('boolean');
    expect(typeof parameter.spaWellnessCentre).toBe('boolean');
    expect(typeof parameter.aeroportSchuttle).toBe('boolean');
    expect(typeof parameter.restaurant).toBe('boolean');
    expect(typeof parameter.receptionAlwaysOpen).toBe('boolean');
    expect(typeof parameter.kitchen).toBe('boolean');
    expect(typeof parameter.privateBathroom).toBe('boolean');
    expect(typeof parameter.airConditioning).toBe('boolean');
    expect(typeof parameter.laptopFriendlyWorkspace).toBe('boolean');
    expect(typeof parameter.bath).toBe('boolean');
    expect(typeof parameter.privatePool).toBe('boolean');
    expect(typeof parameter.terrace).toBe('boolean');
    expect(typeof parameter.balcony).toBe('boolean');
    expect(typeof parameter.blatScreenTv).toBe('boolean');
    expect(typeof parameter.washingMachine).toBe('boolean');
    expect(typeof parameter.patio).toBe('boolean');
    expect(typeof parameter.soundproofing).toBe('boolean');
    expect(typeof parameter.viewHotel).toBe('boolean');
    expect(typeof parameter.seaView).toBe('boolean');
    expect(typeof parameter.wheelchairAccessible).toBe('boolean');
    expect(typeof parameter.toiletGrabRails).toBe('boolean');
    expect(typeof parameter.higherLevelToilet).toBe('boolean');
    expect(typeof parameter.lowerBathroomSink).toBe('boolean');
    expect(typeof parameter.emergencyCordBathroom).toBe('boolean');
    expect(typeof parameter.visualAidsBraille).toBe('boolean');
    expect(typeof parameter.visualAidsTactileSigns).toBe('boolean');
  });
});
