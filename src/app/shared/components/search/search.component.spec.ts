import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let fixture: ComponentFixture<SearchComponent>;
  let component: SearchComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
    });

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create the SearchComponent', () => {
    expect(component).toBeTruthy();
  });
});
