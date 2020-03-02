import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PersonalPronounsWorksheet4Component } from './std01-personal-pronouns-worksheet4.component';

describe('Std01PersonalPronounsWorksheet4Component', () => {
  let component: Std01PersonalPronounsWorksheet4Component;
  let fixture: ComponentFixture<Std01PersonalPronounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PersonalPronounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PersonalPronounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
