import { Hotel } from './hotel.model';

describe('Hotel', () => {
  it('should create an instance', () => {
    const hotel: Hotel = {
      id: '74812544-f79b-43f2-be89-34c21d21d51b',
      name: 'Hotel Example',
      description: 'A sample hotel',
      stars: 4,
      address: '123 Main St',
      latitude: 42.123456,
      longitude: -71.987654,
      numVisited: 100,
      populationId: 1,
      population: {
        id: 1,
        name: 'City',
      },
      parameter: {
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
        hotelId: '74812544-f79b-43f2-be89-34c21d21d51b',
      },
      owners: {
        id: '81f465f2-033c-4c7d-a387-b7c52f86a072',
        userId: '07a88d09-30dd-4c2e-bddf-e66173a2e378',
        hotelId: '74812544-f79b-43f2-be89-34c21d21d51b',
      },
      favorites: [],
      reviews: [],
      images: [],
      sites: [],
    };

    expect(hotel).toBeTruthy();
    expect(hotel.id).toBe('1');
    expect(hotel.name).toBe('Hotel Example');
    expect(hotel.stars).toBe(4);
  });
});
