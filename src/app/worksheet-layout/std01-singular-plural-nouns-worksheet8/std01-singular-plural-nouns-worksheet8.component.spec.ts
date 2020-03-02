import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SingularPluralNounsWorksheet8Component } from './std01-singular-plural-nouns-worksheet8.component';

describe('Std01SingularPluralNounsWorksheet8Component', () => {
  let component: Std01SingularPluralNounsWorksheet8Component;
  let fixture: ComponentFixture<Std01SingularPluralNounsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SingularPluralNounsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SingularPluralNounsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
