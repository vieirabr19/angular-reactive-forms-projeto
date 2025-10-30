import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationsContainer } from './user-informations-container';

describe('UserInformationsContainer', () => {
  let component: UserInformationsContainer;
  let fixture: ComponentFixture<UserInformationsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInformationsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
