import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { ICitiesResponse } from "../interfaces/cities-response/cities-response.interface";
import { CitiesList } from "../types/cities-list.type";

@Injectable({
  providedIn: 'root'
})
export class citiesService {
  constructor(private readonly _http: HttpClient) { }

  getCities(country: string, state: string): Observable<CitiesList> {
    return this._http.post<ICitiesResponse>('https://countriesnow.space/api/v0.1/countries/state/cities', { country, state }).pipe(
      map(citiesResponse => citiesResponse.data)
    );
  }
}