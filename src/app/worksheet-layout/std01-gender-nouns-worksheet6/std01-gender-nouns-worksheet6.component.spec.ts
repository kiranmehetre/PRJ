import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01GenderNounsWorksheet6Component } from './std01-gender-nouns-worksheet6.component';

describe('Std01GenderNounsWorksheet6Component', () => {
  let component: Std01GenderNounsWorksheet6Component;
  let fixture: ComponentFixture<Std01GenderNounsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01GenderNounsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01GenderNounsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
