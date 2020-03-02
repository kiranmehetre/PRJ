import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03GenderNounsWorksheet2Component } from './std03-gender-nouns-worksheet2.component';

describe('Std03GenderNounsWorksheet2Component', () => {
  let component: Std03GenderNounsWorksheet2Component;
  let fixture: ComponentFixture<Std03GenderNounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03GenderNounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03GenderNounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
