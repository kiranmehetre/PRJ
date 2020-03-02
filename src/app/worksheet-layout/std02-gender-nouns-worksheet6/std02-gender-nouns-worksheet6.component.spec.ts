import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02GenderNounsWorksheet6Component } from './std02-gender-nouns-worksheet6.component';

describe('Std02GenderNounsWorksheet6Component', () => {
  let component: Std02GenderNounsWorksheet6Component;
  let fixture: ComponentFixture<Std02GenderNounsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02GenderNounsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02GenderNounsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
