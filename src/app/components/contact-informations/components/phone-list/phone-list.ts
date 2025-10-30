import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { PhoneTypeEnum } from '../../../../enums/phone-type.anum';
import { IPhone } from '../../../../interfaces/user/phone.interface';
import { IPhoneListToDisplay } from '../../../../interfaces/display/phone-list-to-display.interface';
import { TPhoneList } from '../../../../types/phone-list.type';
import { phoneTypeDescriptionMap } from '../../../../shared/utils/phone-type-description-map';

@Component({
  selector: 'app-phone-list',
  standalone: false,
  templateUrl: './phone-list.html',
  styleUrl: './phone-list.scss'
})
export class PhoneList implements OnChanges {
  phoneListToDisplay: IPhoneListToDisplay[] = [];

  @Input({ required: true }) userPhoneList: TPhoneList | undefined = [];

  ngOnChanges(changes: SimpleChanges) {
    const currentValue = changes['userPhoneList'].currentValue;
    currentValue && this.preparePhoneListToDisplay();
  }

  preparePhoneListToDisplay() {
    this.phoneListToDisplay = [];   

    Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => {
      const phoneFound = this.userPhoneList?.find((phone: IPhone) => phone.type === phoneType);

      this.phoneListToDisplay.push({
        type: phoneTypeDescriptionMap[phoneType as PhoneTypeEnum],
        number: phoneFound ? this.formatPhoneNumber(phoneFound) : '-'
      });
    });
  }

  formatPhoneNumber(phone: IPhone) {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
  }
}