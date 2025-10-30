import { IAddress } from "../user/address.interface";

export interface IAddressListToDisplay extends IAddress {
  typeDescription: string;
}