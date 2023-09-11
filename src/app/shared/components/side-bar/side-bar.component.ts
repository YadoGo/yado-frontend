import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  showElement = false;

  toggleElementVisibility() {
    this.showElement = !this.showElement;
  }
}
