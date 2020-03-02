import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03GenderNounsWorksheet10Component } from './std03-gender-nouns-worksheet10.component';

describe('Std03GenderNounsWorksheet10Component', () => {
  let component: Std03GenderNounsWorksheet10Component;
  let fixture: ComponentFixture<Std03GenderNounsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03GenderNounsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03GenderNounsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
