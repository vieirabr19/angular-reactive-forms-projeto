import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IUser } from "../../interfaces/user/user.interface";
import { TPhoneList } from "../../types/phone-list.type";
import { TAddressList } from "../../types/address-list.type";
import { TDependentsList } from "../../types/dependents-list.type";

export class UserFormController {
  userForm!: FormGroup;

  private _fb = inject(FormBuilder);

  constructor() {
    this.createUserForm();
  }

  fulFillUserForm(user: IUser) {
    this.resetUserForm();
    this.fulFillGeneralInformations(user);
    this.fulFillPhoneList(user.phoneList);
    this.fulFillAddressList(user.addressList);
    this.fulFillDependentsList(user.dependentsList);

    console.log(this.userForm);
  }

  get generalInformations(): FormGroup {
    return this.userForm.get('generalInformations') as FormGroup;
  }

  get phoneList(): FormArray {
    return this.userForm.get('contactInformations.phoneList') as FormArray;
  }

  get addressList(): FormArray {
    return this.userForm.get('contactInformations.addressList') as FormArray;
  }

  get dependentsList(): FormArray {
    return this.userForm.get('dependentsList') as FormArray;
  }

  private resetUserForm() {
    this.userForm.reset();
    this.generalInformations.reset();

    this.phoneList.reset();
    this.phoneList.clear();

    this.addressList.reset();
    this.addressList.clear();

    this.dependentsList.reset();
    this.dependentsList.clear();
  }

  private fulFillGeneralInformations(user: IUser) {
    this.generalInformations?.patchValue(user);
  }

  private fulFillPhoneList(userPhoneList: TPhoneList) {
    userPhoneList.forEach(phone => {
      this.phoneList.push(this._fb.group({
        areaCode: [phone.areaCode, Validators.required],
        internationalCode: [phone.internationalCode, Validators.required],
        number: [phone.number, Validators.required],
        type: [phone.type, Validators.required],
      }))
    });
  }

  private fulFillAddressList(userAddressList: TAddressList) {
    userAddressList.forEach(address => {
      this.addressList.push(this._fb.group({
        type: [address.type, Validators.required],
        street: [address.street, Validators.required],
        complement: [address.complement, Validators.required],
        country: [address.country, Validators.required],
        state: [address.state, Validators.required],
        city: [address.city, Validators.required],
      }))
    });
  }

  private fulFillDependentsList(userDependentsList: TDependentsList) {
    userDependentsList.forEach(dependent => {
      this.dependentsList.push(this._fb.group({
        name: [dependent.name, Validators.required],
        age: [dependent.age, Validators.required],
        document: [dependent.document, Validators.required],
      }));
    });
  }

  private createUserForm() {
    this.userForm = this._fb.group({
      generalInformations: this._fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        maritalStatus: [null, Validators.required],
        monthlyIncome: [null, Validators.required],
        birthDate: [null, Validators.required],
      }),
      contactInformations: this._fb.group({
        phoneList: this._fb.array([]),
        addressList: this._fb.array([]),
      }),
      dependentsList: this._fb.array([])
    });
  }
}