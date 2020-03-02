import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SingularPluralNounsWorksheet7Component } from './std03-singular-plural-nouns-worksheet7.component';

describe('Std03SingularPluralNounsWorksheet7Component', () => {
  let component: Std03SingularPluralNounsWorksheet7Component;
  let fixture: ComponentFixture<Std03SingularPluralNounsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SingularPluralNounsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SingularPluralNounsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
