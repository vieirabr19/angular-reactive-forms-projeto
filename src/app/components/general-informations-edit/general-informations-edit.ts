import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { maritalStatusList } from '../../shared/utils/marital-status-description-map';
import { CountriesList } from '../../types/countries-list.type';
import { StatesList } from '../../types/states-list.type';

@Component({
  selector: 'app-general-informations-edit',
  standalone: false,
  templateUrl: './general-informations-edit.html',
  styleUrl: './general-informations-edit.scss',
})
export class GeneralInformationsEdit implements OnInit, OnChanges {  
  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countriesList: CountriesList = [];
  @Input({ required: true }) statesList: StatesList = [];

  @Output('onCountrySelected') countrySelectedEmitt = new EventEmitter<string>();

  countriesListFiltered: CountriesList = [];
  statesListFiltered: StatesList = [];

  ngOnInit() {
    this.watchCountryFormChangeAndFilter();
    this.watchStateFormChangeAndFilter();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.countriesListFiltered = this.countriesList;
    this.statesListFiltered = this.statesList;
  }

  get maritalStatusList() {
    return maritalStatusList;
  }

  get emailControl(): FormControl {
    return this.userForm.get('generalInformations.email') as FormControl;
  }

  get countryControl(): FormControl {
    return this.userForm.get('generalInformations.country') as FormControl;
  }

  get stateControl(): FormControl {
    return this.userForm.get('generalInformations.state') as FormControl;
  }

  onCountrySelected(event: MatAutocompleteSelectedEvent) {
    this.countrySelectedEmitt.emit(event.option.value);
  }

  onStateSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
  }

  private watchCountryFormChangeAndFilter() {
    this.countryControl.valueChanges.subscribe(this.filterCountryList.bind(this));
  }
  
  private watchStateFormChangeAndFilter() {
    this.stateControl.valueChanges.subscribe(this.filterStatesList.bind(this));
  }

  private filterCountryList(searchTerm: string) {
    if(!searchTerm) return;
    this.countriesListFiltered = this.countriesList.filter(country => country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase().trim()))
  }

  private filterStatesList(searchTerm: string){
    if(!searchTerm) return;
    this.statesListFiltered = this.statesList.filter(state => state.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase().trim()))
  }
}