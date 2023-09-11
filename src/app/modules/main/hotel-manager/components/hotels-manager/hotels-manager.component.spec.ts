import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelsManagerComponent } from './hotels-manager.component';
import { ListComponent } from '@shared/components/list';

describe('HotelsManagerComponent', () => {
  let component: HotelsManagerComponent;
  let fixture: ComponentFixture<HotelsManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsManagerComponent, ListComponent],
    });

    fixture = TestBed.createComponent(HotelsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
