import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SingularPluralNounsWorksheet5Component } from './std03-singular-plural-nouns-worksheet5.component';

describe('Std03SingularPluralNounsWorksheet5Component', () => {
  let component: Std03SingularPluralNounsWorksheet5Component;
  let fixture: ComponentFixture<Std03SingularPluralNounsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SingularPluralNounsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SingularPluralNounsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
