import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SingularPluralNounsWorksheet4Component } from './std02-singular-plural-nouns-worksheet4.component';

describe('Std02SingularPluralNounsWorksheet4Component', () => {
  let component: Std02SingularPluralNounsWorksheet4Component;
  let fixture: ComponentFixture<Std02SingularPluralNounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SingularPluralNounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SingularPluralNounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
