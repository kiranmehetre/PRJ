import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01GenderNounsWorksheet1Component } from './std01-gender-nouns-worksheet1.component';

describe('Std01GenderNounsWorksheet1Component', () => {
  let component: Std01GenderNounsWorksheet1Component;
  let fixture: ComponentFixture<Std01GenderNounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01GenderNounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01GenderNounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
