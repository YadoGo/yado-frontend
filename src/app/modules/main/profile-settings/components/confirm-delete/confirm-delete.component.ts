import { Component } from '@angular/core';
import { ProfileSettingsService } from '../../services/profile-settings.service';
import { Store } from '@ngrx/store';
import { selectUserId } from '@core/states/user.selectors';
import { Observable } from 'rxjs';
import { deleteUser } from '@core/states/user.actions';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css'],
})
export class ConfirmDeleteComponent {
  userId$!: Observable<string>;

  constructor(
    private profileSettingsService: ProfileSettingsService,
    private store: Store,
  ) {
    this.userId$ = this.store.select(selectUserId);
  }

  onCancelClick() {
    this.profileSettingsService.setShowDeleteAlert(false);
  }

  confirmDelete(): void {
    this.userId$.subscribe((userId) => {
      this.store.dispatch(deleteUser({ userId }));
    });
  }
}
