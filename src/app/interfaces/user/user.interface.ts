import { AddressList } from "../../types/address-list.type";
import { DependentsList } from "../../types/dependents-list.type";
import { PhoneList } from "../../types/phone-list.type";

export interface IUser {
  id: number;
  name: string;
  email: string;
  country: string;
  state: string;
  maritalStatus: number;
  monthlyIncome: number;
  birthDate: string;
  phoneList: PhoneList;
  addressList: AddressList;
  dependentsList: DependentsList;
}