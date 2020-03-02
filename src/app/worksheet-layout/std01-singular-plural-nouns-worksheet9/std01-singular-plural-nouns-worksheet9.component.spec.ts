import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SingularPluralNounsWorksheet9Component } from './std01-singular-plural-nouns-worksheet9.component';

describe('Std01SingularPluralNounsWorksheet9Component', () => {
  let component: Std01SingularPluralNounsWorksheet9Component;
  let fixture: ComponentFixture<Std01SingularPluralNounsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SingularPluralNounsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SingularPluralNounsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
