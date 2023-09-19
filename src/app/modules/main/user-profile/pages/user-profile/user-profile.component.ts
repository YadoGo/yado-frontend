import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsername } from 'src/app/core/states/user.selectors';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user = {
    name: 'Jonny Pepperoni',
    tag: 'Jonny#2521',
    imageUrl:
      'https://cdn.tasteatlas.com/images/dishes/b05a0af72ad845f3a6abe16143d7853a.jpg?m=facebook',
  };

  username$!: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.username$ = this.store.select(selectUsername);
  }
}
