import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01GenderNounsWorksheet5Component } from './std01-gender-nouns-worksheet5.component';

describe('Std01GenderNounsWorksheet5Component', () => {
  let component: Std01GenderNounsWorksheet5Component;
  let fixture: ComponentFixture<Std01GenderNounsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01GenderNounsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01GenderNounsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
