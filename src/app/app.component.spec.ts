import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from '@core/services/auth/auth.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AuthService],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title to "YADO"', () => {
    expect(component.title).toBe('YADO');
  });

  it('should call initializeUserFromToken on ngOnInit', () => {
    spyOn(authService, 'initializeUserFromToken');
    component.ngOnInit();
    expect(authService.initializeUserFromToken).toHaveBeenCalled();
  });
});
