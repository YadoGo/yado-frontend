import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

}
