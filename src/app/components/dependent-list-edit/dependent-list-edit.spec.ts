import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentListEdit } from './dependent-list-edit';

describe('DependentListEdit', () => {
  let component: DependentListEdit;
  let fixture: ComponentFixture<DependentListEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependentListEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentListEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
