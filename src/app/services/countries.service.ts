import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { ICountriesResponse } from "../interfaces/countries-response/countries-response.interface";
import { CountriesList } from "../types/countries-list.type";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private readonly _http: HttpClient) { }

  getCountries(): Observable<CountriesList> {
    return this._http.get<ICountriesResponse>('https://countriesnow.space/api/v0.1/countries/positions').pipe(
      map(countriesResponse => countriesResponse.data)
    );
  }
}