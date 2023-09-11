import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListHotelsPageComponent } from './list-hotels-page.component';

describe('ListHotelsPageComponent', () => {
  let component: ListHotelsPageComponent;
  let fixture: ComponentFixture<ListHotelsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHotelsPageComponent],
    });

    fixture = TestBed.createComponent(ListHotelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    expect(component.city).toBe('Barcelona');
    expect(component.country).toBe('Spain');
    expect(component.isFiltersExpanded).toBeFalse();
    expect(component.isSortExpanded).toBeFalse();
    expect(component.isOpenMap).toBeFalse();
  });

  it('should toggle filters', () => {
    component.toggleFilters();
    expect(component.isFiltersExpanded).toBeTrue();

    component.toggleFilters();
    expect(component.isFiltersExpanded).toBeFalse();
  });

  it('should toggle sort', () => {
    component.toggleSort();
    expect(component.isSortExpanded).toBeTrue();

    component.toggleSort();
    expect(component.isSortExpanded).toBeFalse();
  });

  it('should receive change map value', () => {
    component.receiveChangeMap(true);
    expect(component.isOpenMap).toBeTrue();

    component.receiveChangeMap(false);
    expect(component.isOpenMap).toBeFalse();
  });
});
