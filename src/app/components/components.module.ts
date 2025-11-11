import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { PipesModule } from "../pipes/pipes.module";

import { UsersList } from './users-list/users-list';
import { GeneralInformations } from './general-informations/general-informations';
import { UserInfoItem } from './user-info-item/user-info-item';
import { ContactInformations } from './contact-informations/contact-informations';
import { PhoneList } from './contact-informations/components/phone-list/phone-list';
import { AddressList } from './contact-informations/components/address-list/address-list';
import { DependentsList } from './dependents-list/dependents-list';
import { ButtonsContainer } from './buttons-container/buttons-container';
import { UserInformationsContainer } from './user-informations-container/user-informations-container';
import { GeneralInformationsEdit } from './general-informations-edit/general-informations-edit';
import { ContactInformationsEdit } from './contact-informations-edit/contact-informations-edit';
import { DependentListEdit } from './dependent-list-edit/dependent-list-edit';
import { PhoneListEdit } from './contact-informations-edit/components/phone-list-edit/phone-list-edit';
import { AddressListEdit } from './contact-informations-edit/components/address-list-edit/address-list-edit';

@NgModule({
  declarations: [
    UsersList,
    GeneralInformations,
    UserInfoItem,
    ContactInformations,
    PhoneList,
    AddressList,
    DependentsList,
    ButtonsContainer,
    UserInformationsContainer,
    GeneralInformationsEdit,
    ContactInformationsEdit,
    DependentListEdit,
    PhoneListEdit,
    AddressListEdit
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    AngularMaterialModule,
    PipesModule
  ],
  exports: [
    UsersList,
    ButtonsContainer,
    UserInformationsContainer,
  ],
  providers: [
    provideNgxMask()
  ],
})
export class ComponentsModule { }