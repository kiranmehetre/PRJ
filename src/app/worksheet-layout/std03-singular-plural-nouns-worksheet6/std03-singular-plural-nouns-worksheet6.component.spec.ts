import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SingularPluralNounsWorksheet6Component } from './std03-singular-plural-nouns-worksheet6.component';

describe('Std03SingularPluralNounsWorksheet6Component', () => {
  let component: Std03SingularPluralNounsWorksheet6Component;
  let fixture: ComponentFixture<Std03SingularPluralNounsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SingularPluralNounsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SingularPluralNounsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
