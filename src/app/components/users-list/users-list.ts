import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { UsersListResponse } from '../../types/users-list-response.type';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersList {
  userSeletedIndex: number | undefined;

  @Input({ required: true }) usersList: UsersListResponse = [];
  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>;

  onUserSelected(userIndex: number) {
    this.userSeletedIndex = userIndex;
    this.onUserSelectedEmitt.emit(userIndex);
  }
}
