import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SingularPluralNounsWorksheet8Component } from './std02-singular-plural-nouns-worksheet8.component';

describe('Std02SingularPluralNounsWorksheet8Component', () => {
  let component: Std02SingularPluralNounsWorksheet8Component;
  let fixture: ComponentFixture<Std02SingularPluralNounsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SingularPluralNounsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SingularPluralNounsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
