import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'YADO';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.initializeUserFromToken();
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
