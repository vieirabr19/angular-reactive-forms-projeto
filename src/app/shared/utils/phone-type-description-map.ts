import { PhoneTypeEnum } from "../../enums/phone-type.anum";

export const phoneTypeDescriptionMap: { [key in PhoneTypeEnum]: string } = {
  [PhoneTypeEnum.RESIDENTIAL]: 'Residencial',
  [PhoneTypeEnum.CELLPHONE]: 'Celular',
  [PhoneTypeEnum.EMERGENCY]: 'Emergência',
};