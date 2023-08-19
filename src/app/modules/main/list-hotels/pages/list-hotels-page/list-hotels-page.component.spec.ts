import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHotelsPageComponent } from './list-hotels-page.component';

describe('ListHotelsPageComponent', () => {
  let component: ListHotelsPageComponent;
  let fixture: ComponentFixture<ListHotelsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHotelsPageComponent]
    });
    fixture = TestBed.createComponent(ListHotelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
