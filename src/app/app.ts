import { Component, computed, OnInit, inject, AfterViewInit } from '@angular/core';

import { UsersService } from './services/users.service';
import { CountriesService } from './services/countries.service';
import { statesService } from './services/states.service';
import { citiesService } from './services/cities.service';

import { UsersListResponse } from './types/users-list-response.type';
import { CountriesList } from './types/countries-list.type';
import { StatesList } from './types/states-list.type';
import { CitiesList } from './types/cities-list.type';

import { toLoadableSignal } from './shared/utils/to-loadable-signal';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  private readonly _usersService = inject(UsersService);
  private readonly _countriesService = inject(CountriesService);
  private readonly _statesService = inject(statesService);
  private readonly _citiesService = inject(citiesService);

  currentTabIndex: number = 0;

  // Usa o helper genérico
  usersState = toLoadableSignal<UsersListResponse>(this._usersService.getUsers());
  countriesState = toLoadableSignal<CountriesList>(this._countriesService.getCountries());
  statesState = toLoadableSignal<StatesList>(this._statesService.getStates('Brazil'));
  citiesState = toLoadableSignal<CitiesList>(this._citiesService.getCities('Brazil', 'São Paulo'));


  // 🔹 Signals derivados
  // isLoading = computed(() => this.usersState().loading);
  // usersList = computed(() => this.usersState().value ?? []);
  // hasUsers = computed(() => this.usersList().length > 0);
  // errorMessage = computed(() => this.usersState().error);
}
