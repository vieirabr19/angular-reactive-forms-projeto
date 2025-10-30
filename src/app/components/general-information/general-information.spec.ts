import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformation } from './general-information';

describe('GeneralInformation', () => {
  let component: GeneralInformation;
  let fixture: ComponentFixture<GeneralInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
