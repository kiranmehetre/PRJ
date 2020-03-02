import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SingularPluralNounsWorksheet10Component } from './std02-singular-plural-nouns-worksheet10.component';

describe('Std02SingularPluralNounsWorksheet10Component', () => {
  let component: Std02SingularPluralNounsWorksheet10Component;
  let fixture: ComponentFixture<Std02SingularPluralNounsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SingularPluralNounsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SingularPluralNounsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
