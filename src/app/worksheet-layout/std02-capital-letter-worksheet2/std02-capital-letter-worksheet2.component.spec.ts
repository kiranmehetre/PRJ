import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02CapitalLetterWorksheet2Component } from './std02-capital-letter-worksheet2.component';

describe('Std02CapitalLetterWorksheet2Component', () => {
  let component: Std02CapitalLetterWorksheet2Component;
  let fixture: ComponentFixture<Std02CapitalLetterWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02CapitalLetterWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02CapitalLetterWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
