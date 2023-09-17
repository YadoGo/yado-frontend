import { Component, Input } from '@angular/core';
import { Hotel } from '@core/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() hotels?: Hotel[];
}
