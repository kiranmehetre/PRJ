import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SingularPluralNounsWorksheet2Component } from './std02-singular-plural-nouns-worksheet2.component';

describe('Std02SingularPluralNounsWorksheet2Component', () => {
  let component: Std02SingularPluralNounsWorksheet2Component;
  let fixture: ComponentFixture<Std02SingularPluralNounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SingularPluralNounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SingularPluralNounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
