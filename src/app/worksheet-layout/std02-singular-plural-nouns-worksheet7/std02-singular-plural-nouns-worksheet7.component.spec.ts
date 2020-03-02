import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SingularPluralNounsWorksheet7Component } from './std02-singular-plural-nouns-worksheet7.component';

describe('Std02SingularPluralNounsWorksheet7Component', () => {
  let component: Std02SingularPluralNounsWorksheet7Component;
  let fixture: ComponentFixture<Std02SingularPluralNounsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SingularPluralNounsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SingularPluralNounsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
