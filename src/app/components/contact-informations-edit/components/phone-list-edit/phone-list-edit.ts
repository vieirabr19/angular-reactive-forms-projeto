import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phone-list-edit',
  standalone: false,
  templateUrl: './phone-list-edit.html',
  styleUrl: './phone-list-edit.scss'
})
export class PhoneListEdit {
  @Input({ required: true }) userForm!: FormGroup;
}
