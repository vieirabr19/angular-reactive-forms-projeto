import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { IStateResponse } from "../interfaces/states-response/states-response.interface";
import { StatesList } from "../types/states-list.type";

@Injectable({
  providedIn: 'root'
})
export class statesService {
  constructor(private readonly _http: HttpClient) { }

  getStates(country: string): Observable<StatesList> {
    return this._http.post<IStateResponse>('https://countriesnow.space/api/v0.1/countries/states', { country }).pipe(
      map(stateResponse => stateResponse.data.states)
    );
  }
}