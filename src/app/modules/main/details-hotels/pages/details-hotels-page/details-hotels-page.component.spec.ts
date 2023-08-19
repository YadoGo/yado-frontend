import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHotelsPageComponent } from './details-hotels-page.component';

describe('DetailsHotelsPageComponent', () => {
  let component: DetailsHotelsPageComponent;
  let fixture: ComponentFixture<DetailsHotelsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsHotelsPageComponent],
    });
    fixture = TestBed.createComponent(DetailsHotelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
