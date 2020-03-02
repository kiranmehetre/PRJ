import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SingularPluralNounsWorksheet8Component } from './std03-singular-plural-nouns-worksheet8.component';

describe('Std03SingularPluralNounsWorksheet8Component', () => {
  let component: Std03SingularPluralNounsWorksheet8Component;
  let fixture: ComponentFixture<Std03SingularPluralNounsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SingularPluralNounsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SingularPluralNounsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
