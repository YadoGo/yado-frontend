import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteAccountComponent } from './delete-account.component';
import { ProfileSettingsService } from '../../services/profile-settings.service';
import { Subscription, Subject } from 'rxjs';

describe('DeleteAccountComponent', () => {
  let component: DeleteAccountComponent;
  let fixture: ComponentFixture<DeleteAccountComponent>;
  let profileSettingsService: jasmine.SpyObj<ProfileSettingsService>;
  let subscription: Subscription;
  let showDeleteAlertSubject: Subject<boolean>;

  beforeEach(() => {
    showDeleteAlertSubject = new Subject<boolean>();
    profileSettingsService = jasmine.createSpyObj('ProfileSettingsService', [
      'showDeleteAlert$',
    ]);
    profileSettingsService.showDeleteAlert$ =
      showDeleteAlertSubject.asObservable();

    TestBed.configureTestingModule({
      declarations: [DeleteAccountComponent],
      providers: [
        { provide: ProfileSettingsService, useValue: profileSettingsService },
      ],
    });

    fixture = TestBed.createComponent(DeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially show the delete alert', () => {
    expect(component.showDeleteAlert).toBeTrue();
  });

  it('should hide the delete alert when onShowAlertDelete() is called', () => {
    component.onShowAlertDelete();
    expect(component.showDeleteAlert).toBeTrue();
  });

  it('should update showDeleteAlert when the service emits a value', () => {
    showDeleteAlertSubject.next(false);
    expect(component.showDeleteAlert).toBeFalse();

    showDeleteAlertSubject.next(true);
    expect(component.showDeleteAlert).toBeTrue();
  });

  it('should unsubscribe from the service on ngOnDestroy()', () => {
    spyOn(subscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(subscription.unsubscribe).toHaveBeenCalled();
  });
});
