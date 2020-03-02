import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SingularPluralNounsWorksheet1Component } from './std02-singular-plural-nouns-worksheet1.component';

describe('Std02SingularPluralNounsWorksheet1Component', () => {
  let component: Std02SingularPluralNounsWorksheet1Component;
  let fixture: ComponentFixture<Std02SingularPluralNounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SingularPluralNounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SingularPluralNounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
