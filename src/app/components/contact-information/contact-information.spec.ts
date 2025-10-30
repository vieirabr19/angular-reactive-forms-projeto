import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformation } from './contact-information';

describe('ContactInformation', () => {
  let component: ContactInformation;
  let fixture: ComponentFixture<ContactInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
