import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02GenderNounsWorksheet5Component } from './std02-gender-nouns-worksheet5.component';

describe('Std02GenderNounsWorksheet5Component', () => {
  let component: Std02GenderNounsWorksheet5Component;
  let fixture: ComponentFixture<Std02GenderNounsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02GenderNounsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02GenderNounsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
