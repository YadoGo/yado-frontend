import { Component } from '@angular/core';
import { ProfileSettingsService } from '../../services/profile-settings.service';
import { Store } from '@ngrx/store';
import { selectUserId } from '@core/states/user.selectors';
import { Observable } from 'rxjs';
import { UserService } from '@core/services/user/user.service';
import { Router } from '@angular/router';

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
    private userService: UserService,
    private router: Router,
  ) {
    this.userId$ = this.store.select(selectUserId);
  }

  onCancelClick() {
    this.profileSettingsService.setShowDeleteAlert(false);
  }

  confirmDelete(): void {
    this.userId$.subscribe((userId) => {
      if (userId) {
        this.userService.deleteUser(userId).subscribe(
          () => {
            localStorage.removeItem('token');
            this.router.navigate(['/']).then(() => {
              window.location.reload();
            });
          },
          (error) => {
            console.error('Error:', error);
          },
        );
      }
    });
  }
}
