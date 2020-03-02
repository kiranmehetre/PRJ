import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03GenderNounsWorksheet1Component } from './std03-gender-nouns-worksheet1.component';

describe('Std03GenderNounsWorksheet1Component', () => {
  let component: Std03GenderNounsWorksheet1Component;
  let fixture: ComponentFixture<Std03GenderNounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03GenderNounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03GenderNounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
