import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileSettingsService {
  private showDeleteAlertSource = new BehaviorSubject<boolean>(false);
  showDeleteAlert$ = this.showDeleteAlertSource.asObservable();

  constructor(private http: HttpClient) {}

  setShowDeleteAlert(value: boolean) {
    this.showDeleteAlertSource.next(value);
  }
}
