import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';

@Component({
  selector: 'app-user-informations-container',
  standalone: false,
  templateUrl: './user-informations-container.html',
  styleUrl: './user-informations-container.scss'
})
export class UserInformationsContainer extends UserFormController implements OnChanges {
  currentTabIndex: number = 0;

  @Input({ required: true }) isInEditMode: boolean = false;
  @Input({ required: true }) userSelected: IUser = {} as IUser;

  ngOnChanges(change: SimpleChanges) {
    this.currentTabIndex = 0;

    const hasUserSelected = change['userSelected'] && Object.keys(change['userSelected'].currentValue).length > 0;
    hasUserSelected && this.fulFillUserForm(this.userSelected);
  }
}
