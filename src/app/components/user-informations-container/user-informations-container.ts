import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-informations-container',
  standalone: false,
  templateUrl: './user-informations-container.html',
  styleUrl: './user-informations-container.scss'
})
export class UserInformationsContainer implements OnChanges {
  currentTabIndex: number = 0;

  @Input({ required: true }) isInEditMode: boolean = false;
  @Input({ required: true }) userSelected: IUser = {} as IUser;

  ngOnChanges(_: SimpleChanges) {
    this.currentTabIndex = 0;
  }
}
