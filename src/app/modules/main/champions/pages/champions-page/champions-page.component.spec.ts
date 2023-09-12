import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsPageComponent } from './champions-page.component';

describe('ChampionsPageComponent', () => {
  let component: ChampionsPageComponent;
  let fixture: ComponentFixture<ChampionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionsPageComponent],
    });
    fixture = TestBed.createComponent(ChampionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
