import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CapitalLetterWorksheet3Component } from './std02-capital-letter-worksheet3.component';

describe('Std02CapitalLetterWorksheet3Component', () => {
  let component: Std02CapitalLetterWorksheet3Component;
  let fixture: ComponentFixture<Std02CapitalLetterWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CapitalLetterWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CapitalLetterWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
