import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { PipesModule } from "../pipes/pipes.module";

import { UsersList } from './users-list/users-list';
import { GeneralInformation } from './general-information/general-information';
import { UserInfoItem } from './user-info-item/user-info-item';
import { ContactInformation } from './contact-information/contact-information';
import { PhoneList } from './contact-information/components/phone-list/phone-list';
import { AddressList } from './contact-information/components/address-list/address-list';
import { DependentsList } from './dependents-list/dependents-list';
import { ButtonsContainer } from './buttons-container/buttons-container';
import { UserInformationsContainer } from './user-informations-container/user-informations-container';

@NgModule({
  declarations: [
    UsersList,
    GeneralInformation,
    UserInfoItem,
    ContactInformation,
    PhoneList,
    AddressList,
    DependentsList,
    ButtonsContainer,
    UserInformationsContainer
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PipesModule
  ],
  exports: [
    UsersList,
    GeneralInformation,
    ContactInformation,
    DependentsList,
    ButtonsContainer,
    UserInformationsContainer,
  ]
})
export class ComponentsModule {}