import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHotelsPageComponent } from './top-hotels-page.component';

describe('TopHotelsPageComponent', () => {
  let component: TopHotelsPageComponent;
  let fixture: ComponentFixture<TopHotelsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopHotelsPageComponent]
    });
    fixture = TestBed.createComponent(TopHotelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
