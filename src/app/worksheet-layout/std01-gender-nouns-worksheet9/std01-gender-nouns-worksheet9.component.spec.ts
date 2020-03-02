import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01GenderNounsWorksheet9Component } from './std01-gender-nouns-worksheet9.component';

describe('Std01GenderNounsWorksheet9Component', () => {
  let component: Std01GenderNounsWorksheet9Component;
  let fixture: ComponentFixture<Std01GenderNounsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01GenderNounsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01GenderNounsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
