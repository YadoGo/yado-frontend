import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let fixture: ComponentFixture<SideBarComponent>;
  let component: SideBarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarComponent],
    });

    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
  });

  it('should create the SideBarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize showElement to false', () => {
    expect(component.showElement).toBeFalse();
  });

  it('should toggle showElement when toggleElementVisibility is called', () => {
    component.toggleElementVisibility();
    expect(component.showElement).toBeTrue();

    component.toggleElementVisibility();
    expect(component.showElement).toBeFalse();
  });
});
