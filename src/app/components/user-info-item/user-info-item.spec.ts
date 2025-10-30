import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoItem } from './user-info-item';

describe('UserInfoItem', () => {
  let component: UserInfoItem;
  let fixture: ComponentFixture<UserInfoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
