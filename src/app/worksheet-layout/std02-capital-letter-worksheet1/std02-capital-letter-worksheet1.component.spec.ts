import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CapitalLetterWorksheet1Component } from './std02-capital-letter-worksheet1.component';

describe('Std02CapitalLetterWorksheet1Component', () => {
  let component: Std02CapitalLetterWorksheet1Component;
  let fixture: ComponentFixture<Std02CapitalLetterWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CapitalLetterWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CapitalLetterWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
