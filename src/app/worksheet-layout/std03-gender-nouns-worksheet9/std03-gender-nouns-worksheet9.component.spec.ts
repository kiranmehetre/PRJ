import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03GenderNounsWorksheet9Component } from './std03-gender-nouns-worksheet9.component';

describe('Std03GenderNounsWorksheet9Component', () => {
  let component: Std03GenderNounsWorksheet9Component;
  let fixture: ComponentFixture<Std03GenderNounsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03GenderNounsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03GenderNounsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
