import { Component, OnDestroy } from '@angular/core';
import { ProfileSettingsService } from '../../services/profile-settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css'],
})
export class DeleteAccountComponent implements OnDestroy {
  showDeleteAlert = true;
  private subscription: Subscription;

  constructor(private profileSettingsService: ProfileSettingsService) {
    this.subscription = this.profileSettingsService.showDeleteAlert$.subscribe(
      (value) => {
        this.showDeleteAlert = value;
      },
    );
  }

  onShowAlertDelete() {
    this.showDeleteAlert = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
