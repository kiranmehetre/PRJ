import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SingularPluralNounsWorksheet9Component } from './std02-singular-plural-nouns-worksheet9.component';

describe('Std02SingularPluralNounsWorksheet9Component', () => {
  let component: Std02SingularPluralNounsWorksheet9Component;
  let fixture: ComponentFixture<Std02SingularPluralNounsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SingularPluralNounsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SingularPluralNounsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
