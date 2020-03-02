import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SingularPluralNounsWorksheet6Component } from './std02-singular-plural-nouns-worksheet6.component';

describe('Std02SingularPluralNounsWorksheet6Component', () => {
  let component: Std02SingularPluralNounsWorksheet6Component;
  let fixture: ComponentFixture<Std02SingularPluralNounsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SingularPluralNounsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SingularPluralNounsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
