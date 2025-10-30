import { Component, Input } from '@angular/core';

import { TDependentsList } from '../../types/dependents-list.type';

@Component({
  selector: 'app-dependents-list',
  standalone: false,
  templateUrl: './dependents-list.html',
  styleUrl: './dependents-list.scss'
})
export class DependentsList {
  @Input({ required: true }) userDependentsList: TDependentsList | undefined = [];
}