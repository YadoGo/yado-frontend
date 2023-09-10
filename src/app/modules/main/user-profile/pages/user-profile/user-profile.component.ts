import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user = {
    name: 'Jonny Pepperoni',
    imageUrl:
      'https://cdn.tasteatlas.com/images/dishes/b05a0af72ad845f3a6abe16143d7853a.jpg?m=facebook',
  };
}
