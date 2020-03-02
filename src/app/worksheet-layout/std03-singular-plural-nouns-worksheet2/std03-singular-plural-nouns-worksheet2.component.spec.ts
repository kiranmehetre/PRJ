import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SingularPluralNounsWorksheet2Component } from './std03-singular-plural-nouns-worksheet2.component';

describe('Std03SingularPluralNounsWorksheet2Component', () => {
  let component: Std03SingularPluralNounsWorksheet2Component;
  let fixture: ComponentFixture<Std03SingularPluralNounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SingularPluralNounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SingularPluralNounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
