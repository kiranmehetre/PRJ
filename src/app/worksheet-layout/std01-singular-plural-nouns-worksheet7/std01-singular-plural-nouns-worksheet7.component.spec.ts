import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SingularPluralNounsWorksheet7Component } from './std01-singular-plural-nouns-worksheet7.component';

describe('Std01SingularPluralNounsWorksheet7Component', () => {
  let component: Std01SingularPluralNounsWorksheet7Component;
  let fixture: ComponentFixture<Std01SingularPluralNounsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SingularPluralNounsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SingularPluralNounsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
