import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-general-information',
  standalone: false,
  templateUrl: './general-information.html',
  styleUrl: './general-information.scss'
})
export class GeneralInformation {
  @Input({required: true}) user: IUser | undefined = {} as IUser;
}
