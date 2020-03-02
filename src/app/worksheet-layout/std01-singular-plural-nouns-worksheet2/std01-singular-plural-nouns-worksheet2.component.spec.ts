import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SingularPluralNounsWorksheet2Component } from './std01-singular-plural-nouns-worksheet2.component';

describe('Std01SingularPluralNounsWorksheet2Component', () => {
  let component: Std01SingularPluralNounsWorksheet2Component;
  let fixture: ComponentFixture<Std01SingularPluralNounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SingularPluralNounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SingularPluralNounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
