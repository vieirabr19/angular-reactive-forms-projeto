import { Component, Input, OnChanges, SimpleChanges, inject, signal, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { CountriesService } from '../../services/countries.service';
import { statesService } from '../../services/states.service';

import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesList } from '../../types/countries-list.type';
import { StatesList } from '../../types/states-list.type';

@Component({
  selector: 'app-user-informations-container',
  standalone: false,
  templateUrl: './user-informations-container.html',
  styleUrl: './user-informations-container.scss'
})
export class UserInformationsContainer extends UserFormController implements OnChanges {
  private readonly _countriesService = inject(CountriesService);
  private readonly _statesService = inject(statesService);

  @Input({ required: true }) isInEditMode = false;
  @Input({ required: true }) userSelected: IUser = {} as IUser;

  currentTabIndex = 0;
  selectedCountry = signal<string | null>(null);
  statesList = signal<StatesList>([]);
  
  // Países: carregamento automático
  countriesList = toSignal(this._countriesService.getCountries(), { initialValue: [] as CountriesList });

  constructor() {
    super();

    // Reage a mudanças de país
    effect(() => {
      const country = this.selectedCountry();
      if (!country) return this.statesList.set([]);

      this._statesService.getStates(country).subscribe(states => this.statesList.set(states));
    });
  }

  ngOnChanges(change: SimpleChanges) {
    this.currentTabIndex = 0;

    const hasUserSelected = change['userSelected'] && Object.keys(change['userSelected'].currentValue).length > 0;
    if (!hasUserSelected) return;

    this.fulFillUserForm(this.userSelected);
    this.selectedCountry.set(this.userSelected.country);
  }

  onCountrySelected(country: string) {
    this.selectedCountry.set(country);
  }
}
