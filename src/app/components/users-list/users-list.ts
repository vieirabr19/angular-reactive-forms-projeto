import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { UsersListResponse } from '../../types/users-list-response.type';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersList implements OnInit {
  @Input({ required: true }) usersList: UsersListResponse = [];

  ngOnInit() {
    console.log(this.usersList);
  }
}
