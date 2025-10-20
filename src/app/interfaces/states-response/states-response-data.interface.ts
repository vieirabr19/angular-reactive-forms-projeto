import { StatesList } from "../../types/states-list.type";

export interface IStateResponseData {
  name: string;
  iso3: string;
  states: StatesList;
}