import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SingularPluralNounsWorksheet6Component } from './std01-singular-plural-nouns-worksheet6.component';

describe('Std01SingularPluralNounsWorksheet6Component', () => {
  let component: Std01SingularPluralNounsWorksheet6Component;
  let fixture: ComponentFixture<Std01SingularPluralNounsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SingularPluralNounsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SingularPluralNounsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
