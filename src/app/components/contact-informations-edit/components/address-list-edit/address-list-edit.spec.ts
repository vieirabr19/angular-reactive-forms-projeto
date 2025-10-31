import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListEdit } from './address-list-edit';

describe('AddressListEdit', () => {
  let component: AddressListEdit;
  let fixture: ComponentFixture<AddressListEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressListEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressListEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
