import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListEdit } from './phone-list-edit';

describe('PhoneListEdit', () => {
  let component: PhoneListEdit;
  let fixture: ComponentFixture<PhoneListEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneListEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneListEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
