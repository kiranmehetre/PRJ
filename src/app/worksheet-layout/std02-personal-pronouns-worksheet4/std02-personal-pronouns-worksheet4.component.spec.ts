import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PersonalPronounsWorksheet4Component } from './std02-personal-pronouns-worksheet4.component';

describe('Std02PersonalPronounsWorksheet4Component', () => {
  let component: Std02PersonalPronounsWorksheet4Component;
  let fixture: ComponentFixture<Std02PersonalPronounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PersonalPronounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PersonalPronounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
