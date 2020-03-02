import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03GenderNounsWorksheet4Component } from './std03-gender-nouns-worksheet4.component';

describe('Std03GenderNounsWorksheet4Component', () => {
  let component: Std03GenderNounsWorksheet4Component;
  let fixture: ComponentFixture<Std03GenderNounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03GenderNounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03GenderNounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
