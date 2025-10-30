import { AddressTypeEnum } from "../../enums/address-type.enum";

export const addressTypeDescriptionMap: { [key in AddressTypeEnum]: string } = {
  [AddressTypeEnum.RESIDENTIAL]: 'Residêncial',
  [AddressTypeEnum.WORK]: 'Trabalho',
  [AddressTypeEnum.ALTERNATIVE]: 'Alternativo',
}