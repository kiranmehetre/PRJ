import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01GenderNounsWorksheet4Component } from './std01-gender-nouns-worksheet4.component';

describe('Std01GenderNounsWorksheet4Component', () => {
  let component: Std01GenderNounsWorksheet4Component;
  let fixture: ComponentFixture<Std01GenderNounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01GenderNounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01GenderNounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
