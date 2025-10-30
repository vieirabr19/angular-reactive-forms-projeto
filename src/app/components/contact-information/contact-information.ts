import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-contact-information',
  standalone: false,
  templateUrl: './contact-information.html',
  styleUrl: './contact-information.scss'
})
export class ContactInformation {
  @Input({ required: true }) user: IUser | undefined = {} as IUser;
}
