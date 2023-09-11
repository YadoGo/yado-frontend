import { Site } from './site.model';

describe('Site', () => {
  it('should create an instance', () => {
    const site: Site = {
      id: '1',
      typeRomm: 'Double Room',
      originUrl: 'https://example.com',
      nightlyPrice: 100,
      hotelId: 'hotel123',
      companyId: 'company456',
    };
    expect(site).toBeTruthy();
  });

  it('should have valid properties', () => {
    const site: Site = {
      id: '1',
      typeRomm: 'Double Room',
      originUrl: 'https://example.com',
      nightlyPrice: 100,
      hotelId: 'hotel123',
      companyId: 'company456',
    };
    expect(site.id).toBe('1');
    expect(site.typeRomm).toBe('Double Room');
    expect(site.originUrl).toBe('https://example.com');
    expect(site.nightlyPrice).toBe(100);
    expect(site.hotelId).toBe('hotel123');
    expect(site.companyId).toBe('company456');
  });

  it('should have valid types for properties', () => {
    const site: Site = {
      id: '1',
      typeRomm: 'Double Room',
      originUrl: 'https://example.com',
      nightlyPrice: 100,
      hotelId: 'hotel123',
      companyId: 'company456',
    };
    expect(typeof site.id).toBe('string');
    expect(typeof site.typeRomm).toBe('string');
    expect(typeof site.originUrl).toBe('string');
    expect(typeof site.nightlyPrice).toBe('number');
    expect(typeof site.hotelId).toBe('string');
    expect(typeof site.companyId).toBe('string');
  });
});
