import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02GenderNounsWorksheet9Component } from './std02-gender-nouns-worksheet9.component';

describe('Std02GenderNounsWorksheet9Component', () => {
  let component: Std02GenderNounsWorksheet9Component;
  let fixture: ComponentFixture<Std02GenderNounsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02GenderNounsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02GenderNounsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
