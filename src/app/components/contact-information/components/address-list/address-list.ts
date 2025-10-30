import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { TAddressList } from '../../../../types/address-list.type';
import { AddressTypeEnum } from '../../../../enums/address-type.enum';
import { IAddress } from '../../../../interfaces/user/address.interface';
import { IAddressListToDisplay } from '../../../../interfaces/display/address-list-to-display.interface';
import { addressTypeDescriptionMap } from '../../../../shared/utils/address-type-description-map';

@Component({
  selector: 'app-address-list',
  standalone: false,
  templateUrl: './address-list.html',
  styleUrl: './address-list.scss'
})
export class AddressList implements OnChanges {
  addressListToDisplay: IAddressListToDisplay[] = [];

  @Input({ required: true }) userAddressList: TAddressList | undefined = [];

  ngOnChanges(changes: SimpleChanges) {
    const isCurrentValue = Array.isArray(changes['userAddressList'].currentValue);
    isCurrentValue && this.prepareAddressListToDisplay();
  }

  prepareAddressListToDisplay() {
    this.addressListToDisplay = [];

    Object.keys(addressTypeDescriptionMap).map(Number).forEach((addressType: number) => {
      const addressFound = this.userAddressList?.find(address => address.type === addressType);
      this.addressListToDisplay.push(this.returnAddressListToDisplay(addressFound, addressType));
    });
  }

  returnAddressListToDisplay(address: IAddress | undefined, addressType: number): IAddressListToDisplay {
    if (!address) {
      return {
        typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum],
        type: addressType,
        street: '-',
        complement: '-',
        country: '-',
        state: '-',
        city: '-',
      };
    }

    return {
      typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum],
      ...address
    }
  }
}