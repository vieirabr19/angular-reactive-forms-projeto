import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentsList } from './dependents-list';

describe('DependentsList', () => {
  let component: DependentsList;
  let fixture: ComponentFixture<DependentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependentsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
