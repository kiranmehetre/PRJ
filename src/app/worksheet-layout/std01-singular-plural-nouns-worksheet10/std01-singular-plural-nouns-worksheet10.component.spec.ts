import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SingularPluralNounsWorksheet10Component } from './std01-singular-plural-nouns-worksheet10.component';

describe('Std01SingularPluralNounsWorksheet10Component', () => {
  let component: Std01SingularPluralNounsWorksheet10Component;
  let fixture: ComponentFixture<Std01SingularPluralNounsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SingularPluralNounsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SingularPluralNounsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
