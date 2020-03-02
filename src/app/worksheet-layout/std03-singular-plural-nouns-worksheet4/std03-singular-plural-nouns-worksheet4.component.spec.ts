import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SingularPluralNounsWorksheet4Component } from './std03-singular-plural-nouns-worksheet4.component';

describe('Std03SingularPluralNounsWorksheet4Component', () => {
  let component: Std03SingularPluralNounsWorksheet4Component;
  let fixture: ComponentFixture<Std03SingularPluralNounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SingularPluralNounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SingularPluralNounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
