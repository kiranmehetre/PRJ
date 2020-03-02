import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SingularPluralNounsWorksheet3Component } from './std02-singular-plural-nouns-worksheet3.component';

describe('Std02SingularPluralNounsWorksheet3Component', () => {
  let component: Std02SingularPluralNounsWorksheet3Component;
  let fixture: ComponentFixture<Std02SingularPluralNounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SingularPluralNounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SingularPluralNounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
