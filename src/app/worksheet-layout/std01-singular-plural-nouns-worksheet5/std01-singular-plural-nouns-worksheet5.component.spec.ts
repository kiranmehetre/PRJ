import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SingularPluralNounsWorksheet5Component } from './std01-singular-plural-nouns-worksheet5.component';

describe('Std01SingularPluralNounsWorksheet5Component', () => {
  let component: Std01SingularPluralNounsWorksheet5Component;
  let fixture: ComponentFixture<Std01SingularPluralNounsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SingularPluralNounsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SingularPluralNounsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
