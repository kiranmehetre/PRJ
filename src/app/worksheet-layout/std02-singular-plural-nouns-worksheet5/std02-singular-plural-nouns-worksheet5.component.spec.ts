import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SingularPluralNounsWorksheet5Component } from './std02-singular-plural-nouns-worksheet5.component';

describe('Std02SingularPluralNounsWorksheet5Component', () => {
  let component: Std02SingularPluralNounsWorksheet5Component;
  let fixture: ComponentFixture<Std02SingularPluralNounsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SingularPluralNounsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SingularPluralNounsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
