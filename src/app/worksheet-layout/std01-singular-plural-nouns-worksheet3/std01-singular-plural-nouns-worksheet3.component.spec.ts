import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SingularPluralNounsWorksheet3Component } from './std01-singular-plural-nouns-worksheet3.component';

describe('Std01SingularPluralNounsWorksheet3Component', () => {
  let component: Std01SingularPluralNounsWorksheet3Component;
  let fixture: ComponentFixture<Std01SingularPluralNounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SingularPluralNounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SingularPluralNounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
