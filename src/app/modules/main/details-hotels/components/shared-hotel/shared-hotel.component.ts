import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-shared-hotel',
  templateUrl: './shared-hotel.component.html',
  styleUrls: ['./shared-hotel.component.css'],
})
export class SharedHotelComponent implements OnInit {
  @Output() closeClickedEvent = new EventEmitter<void>();

  fullUrl!: string;
  activationVariable = false;

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.fullUrl = window.location.href;
  }

  closeClicked() {
    this.closeClickedEvent.emit();
  }

  copyToClipboard() {
    this.clipboard.copy(this.fullUrl);

    this.activationVariable = true;
    setTimeout(() => {
      this.activationVariable = false;
    }, 1000);
  }
}
