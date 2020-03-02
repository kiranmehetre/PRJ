import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SingularPluralNounsWorksheet1Component } from './std01-singular-plural-nouns-worksheet1.component';

describe('Std01SingularPluralNounsWorksheet1Component', () => {
  let component: Std01SingularPluralNounsWorksheet1Component;
  let fixture: ComponentFixture<Std01SingularPluralNounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SingularPluralNounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SingularPluralNounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
