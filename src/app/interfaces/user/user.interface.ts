import { TAddressList } from "../../types/address-list.type";
import { TDependentsList } from "../../types/dependents-list.type";
import { TPhoneList } from "../../types/phone-list.type";

export interface IUser {
  id: number;
  name: string;
  email: string;
  country: string;
  state: string;
  maritalStatus: number;
  monthlyIncome: number;
  birthDate: string;
  phoneList: TPhoneList;
  addressList: TAddressList;
  dependentsList: TDependentsList;
}