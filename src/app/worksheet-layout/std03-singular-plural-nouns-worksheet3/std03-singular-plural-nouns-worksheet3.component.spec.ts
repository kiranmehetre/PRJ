import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SingularPluralNounsWorksheet3Component } from './std03-singular-plural-nouns-worksheet3.component';

describe('Std03SingularPluralNounsWorksheet3Component', () => {
  let component: Std03SingularPluralNounsWorksheet3Component;
  let fixture: ComponentFixture<Std03SingularPluralNounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SingularPluralNounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SingularPluralNounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
