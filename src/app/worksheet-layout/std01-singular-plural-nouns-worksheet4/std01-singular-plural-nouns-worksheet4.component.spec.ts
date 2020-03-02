import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SingularPluralNounsWorksheet4Component } from './std01-singular-plural-nouns-worksheet4.component';

describe('Std01SingularPluralNounsWorksheet4Component', () => {
  let component: Std01SingularPluralNounsWorksheet4Component;
  let fixture: ComponentFixture<Std01SingularPluralNounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SingularPluralNounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SingularPluralNounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
