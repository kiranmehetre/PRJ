import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SingularPluralNounsWorksheet1Component } from './std03-singular-plural-nouns-worksheet1.component';

describe('Std03SingularPluralNounsWorksheet1Component', () => {
  let component: Std03SingularPluralNounsWorksheet1Component;
  let fixture: ComponentFixture<Std03SingularPluralNounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SingularPluralNounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SingularPluralNounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
